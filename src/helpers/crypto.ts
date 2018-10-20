import * as CryptoJS from 'crypto-js'
import * as Rusha from 'rusha'
import Crypto from '../base/Crypto'
import { BigInteger } from './big-numbers'
import { addPadding } from './bytes'
import { arrayBufferToBytes, bigIntToBytes, bytesToWords, wordsToBytes } from './convert'

export function rsaEncrypt (
  publicKey: { modulus: string, exponent: string },
  bytes: number[]
): Uint8Array | number[] {
  const N = new BigInteger(publicKey.modulus, 16)
  const E = new BigInteger(publicKey.exponent, 16)
  const X = new BigInteger(addPadding(bytes, 255))
  const encryptedBigInt = X.modPowInt(E, N)
  return bigIntToBytes(encryptedBigInt, 256)
}

export function sha1HashSync (bytes: Uint8Array | ArrayBuffer | number[]): ArrayBufferLike {
  return new Rusha(1024 * 1024).rawDigest(bytes).buffer
}

export function sha1BytesSync (bytes: Uint8Array | ArrayBuffer | number[]): number[] {
  return arrayBufferToBytes(sha1HashSync(bytes))
}

export function sha256HashSync (bytes: Uint8Array | ArrayBuffer): number[] {
  return wordsToBytes(CryptoJS.SHA256(bytesToWords(bytes)))
}

export function generateSecretKeys () {
  const secretKey = Crypto.generateKey()
  const secret = Crypto.generateKeys(secretKey)
  return {
    iv: secret.iv.toString('hex'),
    key: secret.key.toString('hex')
  }
}

// function sha256HashSync (bytes) {
//   const hashWords = CryptoJS.SHA256(bytesToWords(bytes))
//   return bytesFromWords(hashWords)
// }
