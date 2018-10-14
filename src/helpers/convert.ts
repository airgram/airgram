/*tslint:disable:no-bitwise*/

import * as CryptoJS from 'crypto-js'
import { bigInt, BigInteger, bigStringInt } from './big-numbers'
import { concatBuffer } from './buffer'

interface Words {
  words: [number, number],
  sigBytes: number
}

// export function convertToArrayBuffer (bytes: Uint8Array | number[]): ArrayBufferLike {
//   if (bytes instanceof ArrayBuffer) {
//     return bytes
//   }
//   if (bytes instanceof Uint8Array &&
//     bytes.buffer.byteLength === bytes.length * bytes.BYTES_PER_ELEMENT) {
//     return bytes.buffer
//   }
//   return bytesToArrayBuffer(bytes)
// }

export function convertToUint8Array (bytes: Uint8Array | number[]): Uint8Array {
  if (bytes instanceof Uint8Array) {
  // if ('buffer' in bytes) {
    return bytes
  }
  return new Uint8Array(bytes)
}

export function arrayBufferToBytes (buffer: ArrayBufferLike): number[] {
  const len = buffer.byteLength
  const byteView = new Uint8Array(buffer)
  const bytes: number[] = []
  for (let i = 0; i < len; ++i) {
    bytes[i] = byteView[i]
  }
  return bytes
}

export function bigIntToBytes (num: BigInteger, len: number = 0): number[] {
  let bytes = num.toByteArray()
  if (len && bytes.byteLength < len) {
    const padding: number[] = []
    const needPadding = len - bytes.byteLength
    for (let i = 0; i < needPadding; i++) {
      padding[i] = 0
    }
    return arrayBufferToBytes(concatBuffer(padding, bytes))
  } else {
    while (!bytes[0] && (!len || bytes.byteLength > len)) {
      bytes = bytes.slice(1)
    }
    return bytes
  }
}

export function bytesToHex (bytes: Uint8Array | number[]): string {
  const result: string[] = [];
  ((bytes || []) as number[]).forEach((byte) => {
    result.push((byte < 16 ? '0' : '') + (byte || 0).toString(16))
  })
  return result.join('')
}

export function hexToBytes (hexString: string): number[] {
  const len = hexString.length
  const bytes: number[] = []
  let start = 0
  if (hexString.length % 2) {
    bytes.push(parseInt(hexString.charAt(0), 16))
    start++
  }
  for (let i = start; i < len; i += 2) {
    bytes.push(parseInt(hexString.substr(i, 2), 16))
  }
  return bytes
}

export function bufferToArrayBuffer (buffer: Buffer | Uint8Array | number[]): ArrayBuffer {
  const arrayBuffer = new ArrayBuffer(buffer.length)
  const view = new Uint8Array(arrayBuffer)
  for (let i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i]
  }
  return arrayBuffer
}

export function bytesToArrayBuffer (bytes: Uint8Array | number[]): ArrayBuffer {
  return (bytes instanceof Uint8Array ? bytes.buffer : (new Uint8Array(bytes)).buffer) as ArrayBuffer
  // return (new Uint8Array(bytes)).buffer as ArrayBuffer
}

// function bytesToArrayBuffer (b) {
//   return (new Uint8Array(b)).buffer
// }

export function bytesToWords (bytes: ArrayBuffer | Uint8Array | number[]): Words {
  const typedArray = (bytes instanceof ArrayBuffer) ? new Uint8Array(bytes) : bytes
  const len = typedArray.length
  const words: number[] = []
  for (let i = 0; i < len; i++) {
    words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8)
  }
  return new CryptoJS.lib.WordArray.init(words, len) // eslint-disable-line
}

export function wordsToBytes (wordArray: Words): number[] {
  const words = wordArray.words
  const sigBytes = wordArray.sigBytes
  const bytes: number[] = []
  for (let i = 0; i < sigBytes; i++) {
    bytes.push((words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)
  }
  return bytes
}

function longToInts (sLong: string): [number, number] {
  const divRem = bigStringInt(sLong).divideAndRemainder(bigInt(0x100000000))
  return [divRem[0].intValue(), divRem[1].intValue()]
}

export function longToBytes (sLong: string): number[] {
  return wordsToBytes({ words: longToInts(sLong), sigBytes: 8 }).reverse()
}

export function intsToLong (high: number, low: number): string {
  return bigInt(high).shiftLeft(32).add(bigInt(low)).toString(10)
}

export function intToUint (value: number | string): number {
  const num = typeof value === 'string' ? parseInt(value, 10) : value
  return num < 0 ? num + 4294967296 : num
}

export function uintToInt (value) {
  return value > 2147483647 ? value - 4294967296 : value
}
