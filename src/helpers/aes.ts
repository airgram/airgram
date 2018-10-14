/*tslint:disable:no-bitwise*/

import * as CryptoJS from 'crypto-js'
import { addPadding } from './bytes'
import { bytesToWords, wordsToBytes } from './convert'

const IGE = CryptoJS.mode.IGE = CryptoJS.lib.BlockCipherMode.extend()

IGE.Encryptor = IGE.extend({
  processBlock (words, offset) {
    const cipher = this._cipher
    const blockSize = cipher.blockSize

    if (this._ivp === undefined) {
      this._ivp = this._iv.slice(0, blockSize)
      this._iv2p = this._iv.slice(blockSize, blockSize + blockSize)
    }
    const nextIv2p = words.slice(offset, offset + blockSize)
    xorBlock(words, this._ivp, offset, blockSize)
    cipher.encryptBlock(words, offset)
    xorBlock(words, this._iv2p, offset, blockSize)
    this._ivp = words.slice(offset, offset + blockSize)
    this._iv2p = nextIv2p
  }
})

IGE.Decryptor = IGE.extend({
  processBlock (words, offset) {
    const cipher = this._cipher
    const blockSize = cipher.blockSize

    if (this._ivp === undefined) {
      this._ivp = this._iv.slice(0, blockSize)
      this._iv2p = this._iv.slice(blockSize, 2 * blockSize)
    }
    const nextIvp = words.slice(offset, offset + blockSize)
    xorBlock(words, this._iv2p, offset, blockSize)
    cipher.decryptBlock(words, offset)
    xorBlock(words, this._ivp, offset, blockSize)
    this._ivp = nextIvp
    this._iv2p = words.slice(offset, offset + blockSize)
  }
})

function xorBlock (words, block, offset, blockSize) {
  for (let i = 0; i < blockSize; i++) {
    words[offset + i] ^= block[i]
  }
}

export function aesEncryptSync (
  bytes: number[] | ArrayBuffer,
  keyBytes: Uint8Array,
  ivBytes: Uint8Array | number[]
): ArrayBuffer | number[] {
  const bytesWithPadding = addPadding(bytes)
  const encryptedWords = CryptoJS.AES.encrypt(bytesToWords(bytesWithPadding), bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    mode: CryptoJS.mode.IGE,
    padding: CryptoJS.pad.NoPadding
  }).ciphertext
  return wordsToBytes(encryptedWords)
}

export function aesDecryptSync (
  encryptedBytes: Uint8Array | number[],
  keyBytes: Uint8Array,
  ivBytes: Uint8Array | number[]
): Uint8Array | number[] {
  const decryptedWords = CryptoJS.AES.decrypt({ ciphertext: bytesToWords(encryptedBytes) }, bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    mode: CryptoJS.mode.IGE,
    padding: CryptoJS.pad.NoPadding
  })
  return wordsToBytes(decryptedWords)
}
