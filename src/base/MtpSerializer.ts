/*tslint:disable:no-bitwise*/
/*tslint:disable:prefer-for-of*/

import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import { getConstructorByPredicate, getMethodByName } from '../config'
import { bigInt, bigStringInt, bytesToHex, intToUint } from '../helpers'
import { ag } from '../interfaces'
import TYPES from '../ioc/types'

@provide(TYPES.MtpSerializer)
export default class MtpSerializer implements ag.MtpSerializer {
  public static factory (
    createInstance: () => ag.MtpSerializer,
    options?: ag.MtpSerializerOptions
  ) {
    const instance = createInstance()
    instance.configure(options || {})
    return instance
  }

  public offset: number = 0
  private buffer: ArrayBuffer
  private byteView: Uint8Array
  private intView: Int32Array
  private isMtp: boolean
  private maxLength: number

  constructor (@inject(TYPES.Logger) public logger: ag.Logger) {}

  public configure (options: ag.MtpSerializerOptions) {
    this.maxLength = options.maxLength || 2048
    this.isMtp = options.isMtp || false
    this.createBuffer()
  }

  public getArray (): Int32Array {
    const resultBuffer = new ArrayBuffer(this.offset)
    const resultArray = new Int32Array(resultBuffer)
    resultArray.set(this.intView.subarray(0, this.offset / 4))
    return resultArray
  }

  public getBuffer (): ArrayBuffer {
    return this.getArray().buffer as ArrayBuffer
  }

  public getBytes (typed: boolean): Uint8Array | number[] {
    if (typed) {
      const resultBuffer = new ArrayBuffer(this.offset)
      const resultArray = new Uint8Array(resultBuffer)
      resultArray.set(this.byteView.subarray(0, this.offset))
      return resultArray
    } else {
      const bytes: number[] = []
      for (let i = 0; i < this.offset; i++) {
        bytes.push(this.byteView[i])
      }
      return bytes
    }
  }

  public storeBytes (bytes: any, field: string): void {
    if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes)
    } else if (bytes === undefined) {
      bytes = []
    }

    this.logger.debug(() => `storeBytes() ${bytesToHex(bytes)} ${(field || '') + ':bytes'}`)

    const len = bytes.byteLength || bytes.length
    this.checkLength(len + 8)
    if (len <= 253) {
      this.byteView[this.offset++] = len
    } else {
      this.byteView[this.offset++] = 254
      this.byteView[this.offset++] = len & 0xFF
      this.byteView[this.offset++] = (len & 0xFF00) >> 8
      this.byteView[this.offset++] = (len & 0xFF0000) >> 16
    }

    this.byteView.set(bytes, this.offset)
    this.offset += len

    // Padding
    while (this.offset % 4) {
      this.byteView[this.offset++] = 0
    }
  }

  public storeInt (i: number, field: string): void {
    this.writeInt(i, (field || '') + ':int')
  }

  public storeIntBytes (bytes: any, bits, field): void {
    if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes)
    }

    const len = bytes.length
    if ((bits % 32) || (len * 8) !== bits) {
      throw new Error('Invalid bits: ' + bits + ', ' + bytes.length)
    }

    this.logger.debug(() => `storeIntBytes() ${bytesToHex(bytes)} ${(field || '') + ':int' + bits}`)

    this.checkLength(len)

    this.byteView.set(bytes, this.offset)
    this.offset += len
  }

  public storeLong (sLong: any, field: string): void {
    if (Array.isArray(sLong)) {
      if (sLong.length === 2) {
        return this.storeLongP(sLong[0], sLong[1], field)
      } else {
        return this.storeIntBytes(sLong, 64, field)
      }
    }

    if (typeof sLong !== 'string') {
      sLong = sLong ? sLong.toString() : '0'
    }
    const divRem = bigStringInt(sLong).divideAndRemainder(bigInt(0x100000000))

    this.writeInt(intToUint(divRem[1].intValue()), (field || '') + ':long[low]')
    this.writeInt(intToUint(divRem[0].intValue()), (field || '') + ':long[high]')
  }

  public storeLongP (iHigh: number, iLow: number, field: string): void {
    this.writeInt(iLow, (field || '') + ':long[low]')
    this.writeInt(iHigh, (field || '') + ':long[high]')
  }

  public storeMethod (methodName: string, params: { [name: string]: any }): string {
    const methodData: { id: number, params: any[], type: string } = getMethodByName(methodName)
    if (!methodData) {
      throw new Error('No method ' + methodName + ' found')
    }

    this.storeInt(intToUint(methodData.id), methodName + '[id]')

    let param
    let type
    let condType
    let fieldBit
    const len = methodData.params.length
    for (let i = 0; i < len; i++) {
      param = methodData.params[i]
      type = param.type
      if (type.indexOf('?') !== -1) {
        condType = type.split('?')
        fieldBit = condType[0].split('.')
        if (!(params[fieldBit[0]] & (1 << fieldBit[1]))) {
          continue
        }
        type = condType[1]
      }

      this.storeObject(params[param.name], type, methodName + '[' + param.name + ']')
    }

    return methodData.type
  }

  public storeObject (obj: any, type: string, field: string): any {
    switch (type) {
      case '#':
      case 'int':
        return this.storeInt(obj, field)
      case 'long':
        return this.storeLong(obj, field)
      case 'int128':
        return this.storeIntBytes(obj, 128, field)
      case 'int256':
        return this.storeIntBytes(obj, 256, field)
      case 'int512':
        return this.storeIntBytes(obj, 512, field)
      case 'string':
        return this.storeString(obj, field)
      case 'bytes':
        return this.storeBytes(obj, field)
      case 'double':
        return this.storeDouble(obj, field)
      case 'Bool':
        return this.storeBool(obj, field)
      case 'true':
        return
    }

    if (Array.isArray(obj)) {
      if (type.substr(0, 6) === 'Vector') {
        this.writeInt(0x1cb5c415, field + '[id]')
      } else if (type.substr(0, 6) !== 'vector') {
        throw new Error('Invalid vector type ' + type)
      }
      const itemType = type.substr(7, type.length - 8) // for "Vector<itemType>"
      this.writeInt(obj.length, field + '[count]')
      for (let i = 0; i < obj.length; i++) {
        this.storeObject(obj[i], itemType, field + '[' + i + ']')
      }
      return true
    } else if (type.substr(0, 6).toLowerCase() === 'vector') {
      throw new Error(`Invalid vector object "${type}"`)
    }

    if (typeof (obj) !== 'object') {
      throw new Error('Invalid object for type ' + type)
    }

    const predicate = obj._
    const constructorData: { id: number, params: any[], type: string } =
      getConstructorByPredicate(predicate, this.isMtp)

    let isBare = (type.charAt(0) === '%')
    if (isBare) {
      type = type.substr(1)
    }
    if (!constructorData) {
      throw new Error('Predicate "' + predicate + '" does not found')
    }
    if (predicate === type) {
      isBare = true
    }
    if (!isBare) {
      this.writeInt(intToUint(constructorData.id), field + '[' + predicate + '][id]')
    }

    let param
    let nextType
    let condType
    let fieldBit
    const len = constructorData.params.length
    for (let i = 0; i < len; i++) {
      param = constructorData.params[i]
      nextType = param.type
      if (nextType.indexOf('?') !== -1) {
        condType = nextType.split('?')
        fieldBit = condType[0].split('.')
        if (!(obj[fieldBit[0]] & (1 << fieldBit[1]))) {
          continue
        }
        nextType = condType[1]
      }
      this.storeObject(obj[param.name], nextType, field + '[' + predicate + '][' + param.name + ']')
    }

    return constructorData.type
  }

  public storeRawBytes (bytes: any, field: string): void {
    if (bytes instanceof ArrayBuffer) {
      bytes = new Uint8Array(bytes)
    }

    this.logger.debug(() => `storeRawBytes() ${bytesToHex(bytes)} ${(field || '')}`)

    const len = bytes.length
    this.checkLength(len)
    this.byteView.set(bytes, this.offset)
    this.offset += len
  }

  public storeString (s: string | undefined, field: string): void {
    this.logger.debug(() => `storeString() ${s} ${(field || '') + ':string'}`)

    if (s === undefined) {
      s = ''
    }
    const sUTF8 = unescape(encodeURIComponent(s))

    this.checkLength(sUTF8.length + 8)

    const len = sUTF8.length
    if (len <= 253) {
      this.byteView[this.offset++] = len
    } else {
      this.byteView[this.offset++] = 254
      this.byteView[this.offset++] = len & 0xFF
      this.byteView[this.offset++] = (len & 0xFF00) >> 8
      this.byteView[this.offset++] = (len & 0xFF0000) >> 16
    }
    for (let i = 0; i < len; i++) {
      this.byteView[this.offset++] = sUTF8.charCodeAt(i)
    }

    // Padding
    while (this.offset % 4) {
      this.byteView[this.offset++] = 0
    }
  }

  private checkLength (needBytes): void {
    if (this.offset + needBytes < this.maxLength) {
      return
    }

    this.logger.debug(() => `checkLength() ${this.offset} ${needBytes} ${this.maxLength}`)

    this.maxLength = Math.ceil(Math.max(this.maxLength * 2, this.offset + needBytes + 16) / 4) * 4
    const previousBuffer = this.buffer
    const previousArray = new Int32Array(previousBuffer)
    this.createBuffer()
    new Int32Array(this.buffer).set(previousArray)
  }

  private createBuffer (): void {
    this.buffer = new ArrayBuffer(this.maxLength)
    this.intView = new Int32Array(this.buffer)
    this.byteView = new Uint8Array(this.buffer)
  }

  private storeBool (i: number, field: string): void {
    if (i) {
      this.writeInt(0x997275b5, (field || '') + ':bool')
    } else {
      this.writeInt(0xbc799737, (field || '') + ':bool')
    }
  }

  private storeDouble (f: number, field: string): void {
    const buffer = new ArrayBuffer(8)
    const intView = new Int32Array(buffer)
    const doubleView = new Float64Array(buffer)

    doubleView[0] = f

    this.writeInt(intView[0], (field || '') + ':double[low]')
    this.writeInt(intView[1], (field || '') + ':double[high]')
  }

  private writeInt (i: number, field: string): void {
    this.logger.debug(() => `writeInt() ${i}  ${i} ${field}`)

    this.checkLength(4)
    this.intView[this.offset / 4] = i
    this.offset += 4
  }
}
