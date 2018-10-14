/*tslint:disable:no-bitwise*/

import { BigInteger } from './big-numbers'
import { concatBuffer } from './buffer'
import { bigIntToBytes, bytesToHex, hexToBytes } from './convert'
import { bigInt2str, powMod, SecureRandom, str2bigInt } from './numbers'

export function compareBytes (bytes1: Uint8Array | number[], bytes2: Uint8Array | number[]): boolean {
  const len = bytes1.length
  if (len !== bytes2.length) {
    return false
  }
  for (let i = 0; i < len; i++) {
    if (bytes1[i] !== bytes2[i]) {
      return false
    }
  }
  return true
}

export function xorBytes (bytes1: number[], bytes2: number[]): number[] {
  const len = bytes1.length
  const bytes: number[] = []
  for (let i = 0; i < len; ++i) {
    bytes[i] = bytes1[i] ^ bytes2[i]
  }
  return bytes
}

export function addPadding (
  bytes: ArrayBuffer | number[],
  blockSize: number = 16,
  zeroes: boolean = false
): ArrayBuffer | number[] {
  const len = 'byteLength' in bytes ? bytes.byteLength : bytes.length
  const needPadding = blockSize - (len % blockSize)
  if (needPadding > 0 && needPadding < blockSize) {
    const padding = new Array(needPadding)
    if (zeroes) {
      for (let i = 0; i < needPadding; i++) {
        padding[i] = 0
      }
    } else {
      (new SecureRandom()).nextBytes(padding)
    }
    if (bytes instanceof ArrayBuffer) {
      bytes = concatBuffer(bytes, padding)
    } else {
      bytes = bytes.concat(padding)
    }
  }
  return bytes
}

export function bytesModPow (x: number[], y: number[], m: number[]): number[] {
  try {
    const xBigInt = str2bigInt(bytesToHex(x), 16)
    const yBigInt = str2bigInt(bytesToHex(y), 16)
    const mBigInt = str2bigInt(bytesToHex(m), 16)
    const resBigInt = powMod(xBigInt, yBigInt, mBigInt)

    return hexToBytes(bigInt2str(resBigInt, 16))
  } catch (e) {
    // console.error(e)
  }

  return bigIntToBytes(new BigInteger(x).modPow(new BigInteger(y), new BigInteger(m)), 256)
}
