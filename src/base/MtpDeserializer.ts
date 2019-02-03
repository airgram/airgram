/*tslint:disable:no-bitwise*/
/*tslint:disable:prefer-for-of*/

import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import { getConstructorById, getConstructorByPredicate, getConstructorByType } from '../config'
import { bigInt, bytesToHex, uintToInt, uncompress } from '../helpers'
import { ag } from '../interfaces'
import TYPES from '../ioc/types'

@provide(TYPES.MtpDeserializer)
export default class MtpDeserializer implements ag.MtpDeserializer {
  public static factory (
    createInstance: () => ag.MtpDeserializer,
    buffer: ArrayBuffer | Buffer | ArrayLike<number>,
    options?: ag.MtpDeserializerOptions
  ) {
    const instance = createInstance()
    instance.configure(buffer, options || {})
    return instance
  }

  public buffer: ArrayBuffer | ArrayLike<number> | Buffer

  public byteView: Uint8Array

  public intView: Uint32Array

  private isMtp: boolean = false

  private offset: number = 0

  private override: { [key: string]: any } = {}

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger,
    @inject(TYPES.MtpDeserializerFactory) protected createDeserializer: ag.MtpDeserializerFactory
  ) {}

  public configure (buffer: Buffer | ArrayLike<number>, options: ag.MtpDeserializerOptions) {
    this.buffer = buffer
    this.byteView = new Uint8Array(buffer)
    this.intView = new Uint32Array(buffer)
    this.isMtp = options.isMtp || false
    this.override = options.override || {}
  }

  public fetchInt (field?: string): number {
    return this.readInt((field || '') + ':int')
  }

  public fetchIntBytes (bits: number, typed: boolean, field?: string): Uint8Array | number[] {
    if (bits % 32) {
      throw new Error('Invalid bits: ' + bits)
    }

    const len = bits / 8
    if (typed) {
      const result = this.byteView.subarray(this.offset, this.offset + len)
      this.offset += len
      return result
    }

    const bytes: number[] = []
    for (let i = 0; i < len; i++) {
      bytes.push(this.byteView[this.offset++])
    }

    this.logger.debug(() => `fetchIntBytes() ${bytesToHex(bytes)} ${(field || '') + ':int' + bits}`)

    return bytes
  }

  public fetchLong (field?: string): string {
    const iLow = this.readInt((field || '') + ':long[low]')
    const iHigh = this.readInt((field || '') + ':long[high]')

    return bigInt(iHigh).shiftLeft(32).add(bigInt(iLow)).toString()
  }

  public fetchObject (type: string, field?: string): any {
    field = field || type || 'Object'

    switch (type) {
      case '#':
      case 'int':
        return this.fetchInt(field)
      case 'long':
        return this.fetchLong(field)
      case 'int128':
        return this.fetchIntBytes(128, false, field)
      case 'int256':
        return this.fetchIntBytes(256, false, field)
      case 'int512':
        return this.fetchIntBytes(512, false, field)
      case 'string':
        return this.fetchString(field)
      case 'bytes':
        return this.fetchBytes(field)
      case 'double':
        return this.fetchDouble(field)
      case 'Bool':
        return this.fetchBool(field)
      case 'true':
        return true
    }

    if (type.substr(0, 6) === 'Vector' || type.substr(0, 6) === 'vector') {
      if (type.charAt(0) === 'V') {
        const constructor = this.readInt(field + '[id]')
        const constructorCmp = uintToInt(constructor)

        if (constructorCmp === 0x3072cfa1) { // Gzip packed
          const compressed = this.fetchBytes(field + '[packed_string]')
          const buffer = uncompress(compressed)
          const newDeserializer = (this.createDeserializer(buffer))

          return newDeserializer.fetchObject(type, field)
        }
        if (constructorCmp !== 0x1cb5c415) {
          throw new Error('Invalid vector constructor ' + constructor)
        }
      }
      const len = this.readInt(field + '[count]')
      const vectorResult: any[] = []
      if (len > 0) {
        const itemType = type.substr(7, type.length - 8) // for "Vector<itemType>"
        for (let i = 0; i < len; i++) {
          vectorResult.push(this.fetchObject(itemType, field + '[' + i + ']'))
        }
      }
      return vectorResult
    }

    let constructorData: ag.TelegramConstructor | undefined
    let fallback = false

    if (type.charAt(0) === '%') {
      constructorData = getConstructorByType(type.substr(1), this.isMtp)
      if (!constructorData) {
        throw new Error('Constructor not found for type: ' + type)
      }
    } else if (Number(type.charAt(0)) >= 97 && Number(type.charAt(0)) <= 122) {
      constructorData = getConstructorByPredicate(type, this.isMtp)
      if (!constructorData) {
        throw new Error('Constructor not found for predicate: ' + type)
      }
    } else {
      const constructor = this.readInt(field + '[id]')
      const constructorId = uintToInt(constructor)

      if (constructorId === 0x3072cfa1) { // Gzip packed
        const compressed = this.fetchBytes(field + '[packed_string]')
        const buffer = uncompress(Buffer.from(compressed))
        const newDeserializer = (this.createDeserializer(buffer))

        return newDeserializer.fetchObject(type, field)
      }

      constructorData = getConstructorById(constructorId, this.isMtp)
      if (!constructorData && this.isMtp) {
        constructorData = getConstructorById(constructorId, false)
        if (constructorData) {
          this.isMtp = false
          fallback = true
        }
      }
      if (!constructorData) {
        throw new Error('Constructor not found: ' + constructor + ' ' + this.fetchInt() + ' ' + this.fetchInt())
      }
    }

    const { predicate } = constructorData
    const result: { [key: string]: any } = { _: predicate }
    const overrideKey = (this.isMtp ? 'mt_' : '') + predicate
    const self = this

    if (this.override && this.override[overrideKey]) {
      this.override[overrideKey].apply(this, [result, field + '[' + predicate + ']'])
    } else {
      const len = constructorData.params.length
      for (let i = 0; i < len; i++) {
        const param = constructorData.params[i]
        let { type: paramType } = param
        if (paramType === '#' && result.pFlags === undefined) {
          result.pFlags = {}
        }
        const isCond = (paramType.indexOf('?') !== -1)
        if (isCond) {
          const condType = paramType.split('?')
          const fieldBit: any = condType[0].split('.')
          if (!(result[fieldBit[0]] & (1 << fieldBit[1]))) {
            continue
          }
          paramType = condType[1]
        }

        const value = self.fetchObject(paramType, field + '[' + predicate + '][' + param.name + ']')

        if (isCond && paramType === 'true') {
          result.pFlags[param.name] = value
        }
        result[param.name] = value
      }
    }

    if (fallback) {
      this.isMtp = true
    }

    return result
  }

  public fetchRawBytes (len: number | false, typed: boolean, field?: string): Uint8Array | number[] {
    if (len === false) {
      len = this.readInt((field || '') + '_length')
      if (len > this.byteView.byteLength) {
        throw new Error('Invalid raw bytes length: ' + len + ', buffer len: ' + this.byteView.byteLength)
      }
    }

    if (typed) {
      const bytes = new Uint8Array(len)
      bytes.set(this.byteView.subarray(this.offset, this.offset + len))
      this.offset += len
      return bytes
    } else {
      const bytes: number[] = []
      for (let i = 0; i < len; i++) {
        bytes.push(this.byteView[this.offset++])
      }

      this.logger.debug(() => `fetchRawBytes() ${bytesToHex(bytes)} ${(field || '')}`)

      return bytes
    }
  }

  public fetchString (field?: string): string {
    let len = this.byteView[this.offset++]

    if (len === 254) {
      len = this.byteView[this.offset++] |
        (this.byteView[this.offset++] << 8) |
        (this.byteView[this.offset++] << 16)
    }

    let sUTF8 = ''
    for (let i = 0; i < len; i++) {
      sUTF8 += String.fromCharCode(this.byteView[this.offset++])
    }

    // Padding
    while (this.offset % 4) {
      this.offset++
    }

    let s
    try {
      s = decodeURIComponent(escape(sUTF8))
    } catch (e) {
      s = sUTF8
    }

    this.logger.debug(() => `fetchString() ${s} ${(field || '') + ':string'}`)

    return s
  }

  public getOffset (): number {
    return this.offset
  }

  private fetchBool (field: string): boolean {
    const i = this.readInt((field || '') + ':bool')
    if (i === 0x997275b5) {
      return true
    } else if (i === 0xbc799737) {
      return false
    }

    this.offset -= 4
    return this.fetchObject('Object', field)
  }

  private fetchBytes (field: string): Uint8Array {
    let len = this.byteView[this.offset++]

    if (len === 254) {
      len = this.byteView[this.offset++] |
        (this.byteView[this.offset++] << 8) |
        (this.byteView[this.offset++] << 16)
    }

    const bytes = this.byteView.subarray(this.offset, this.offset + len)
    this.offset += len

    // Padding
    while (this.offset % 4) {
      this.offset++
    }

    this.logger.debug(() => `fetchBytes() ${bytesToHex(bytes)} ${(field || '') + ':bytes'}`)

    return bytes
  }

  // private fetchEnd (): boolean {
  //   if (this.offset !== this.byteView.length) {
  //     throw new Error('Fetch end with non-empty buffer')
  //   }
  //   return true
  // }

  private fetchDouble (field?: string): number {
    const buffer = new ArrayBuffer(8)
    const intView = new Int32Array(buffer)
    const doubleView = new Float64Array(buffer)

    intView[0] = this.readInt((field || '') + ':double[low]')
    intView[1] = this.readInt((field || '') + ':double[high]')

    return doubleView[0]
  }

  private readInt (field: string): number {
    if (this.offset >= this.intView.length * 4) {
      throw new Error('Nothing to fetch: ' + field)
    }
    const i = this.intView[this.offset / 4]

    this.logger.debug(() => `readInt() ${i.toString(16)} ${i} ${field}`)

    this.offset += 4
    return i
  }
}
