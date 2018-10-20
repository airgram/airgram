import * as crypto from 'crypto'
import { provide } from 'inversify-binding-decorators'
import { ag } from '../interfaces'
import TYPES from '../ioc/types'

interface KeyAndIv {
  iv: Buffer,
  key: Buffer
}

export const CIPHERS = {
  AES_128: 'aes128',          // requires 16 byte key
  AES_128_CBC: 'aes-128-cbc', // requires 16 byte key
  AES_192: 'aes192',          // requires 24 byte key
  AES_256: 'aes256'           // requires 32 byte key
}

function asBuffer (value: Buffer | string | undefined, encoding = 'hex'): Buffer {
  if (!value) {
    throw new Error('asBuffer() value is empty')
  }
  return (value instanceof Buffer) ? value : Buffer.from(value, encoding)
}

@provide(TYPES.Crypto)
export default class Crypto implements ag.Crypto {
  public static generateKey (size: number = 32): Buffer {
    return crypto.pseudoRandomBytes(size)
  }

  public static generateKeys (key: Buffer | string, iv?: Buffer | string): KeyAndIv {
    const keyBuffer = asBuffer(key)
    const ivBuffer = iv ? asBuffer(iv) : this.generateKey(16)

    return {
      iv: ivBuffer,
      key: keyBuffer
    }
  }

  public alg: string = CIPHERS.AES_256
  public inputEncoding: crypto.Utf8AsciiBinaryEncoding = 'utf8'
  public outputEncoding: crypto.Utf8AsciiBinaryEncoding = 'utf8'
  private iv: Buffer
  private key: Buffer

  public decrypt (text: string, encoding: crypto.HexBase64BinaryEncoding = 'base64'): string {
    const decipher = crypto.createDecipheriv(this.alg, this.key, this.iv)
    let result = decipher.update(text, encoding, this.outputEncoding)
    result += decipher.final(this.outputEncoding)
    return result
  }

  public encrypt (text: string, encoding: crypto.HexBase64BinaryEncoding = 'base64'): string {
    const cipher = crypto.createCipheriv(this.alg, this.key, this.iv)
    let result = cipher.update(text, this.inputEncoding, encoding)
    result += cipher.final(encoding)
    return result
  }

  public setSecretKeys (keys: { [key: string]: string | Buffer }) {
    if (('key' in keys)) {
      this.key = asBuffer(keys.key)
    }
    if (('iv' in keys)) {
      this.iv = asBuffer(keys.iv)
    }
  }
}
