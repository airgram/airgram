const CryptoJS = require('crypto-js')

/**
 * Abstract base IGE mode.
 */
let IGE = CryptoJS.mode.IGE = CryptoJS.lib.BlockCipherMode.extend()

/**
 * IGE encryptor.
 */
IGE.Encryptor = IGE.extend({
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *    mode.processBlock(data.words, offset);
   */
  processBlock: function (words, offset) {
    // Shortcuts
    let cipher = this._cipher
    let blockSize = cipher.blockSize

    if (this._ivp === undefined) {
      this._ivp = this._iv.slice(0, blockSize)
      this._iv2p = this._iv.slice(blockSize, blockSize + blockSize)
    }

    // Remember this block to use with next block
    let nextIv2p = words.slice(offset, offset + blockSize)

    // XOR with previous ciphertext
    xorBlock(words, this._ivp, offset, blockSize)

    // Block cipher
    cipher.encryptBlock(words, offset)

    // XOR with previous plaintext
    xorBlock(words, this._iv2p, offset, blockSize)

    this._ivp = words.slice(offset, offset + blockSize)
    this._iv2p = nextIv2p
  }
})

/**
 * IGE decryptor.
 */
IGE.Decryptor = IGE.extend({
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *    mode.processBlock(data.words, offset);
   */
  processBlock: function (words, offset) {
    // Shortcuts
    let cipher = this._cipher
    let blockSize = cipher.blockSize

    if (this._ivp === undefined) {
      this._ivp = this._iv.slice(0, blockSize)
      this._iv2p = this._iv.slice(blockSize, 2 * blockSize)
    }

    // Remember this block to use with next block
    let nextIvp = words.slice(offset, offset + blockSize)

    // XOR with previous ciphertext
    xorBlock(words, this._iv2p, offset, blockSize)

    // Block cipher
    cipher.decryptBlock(words, offset)

    // XOR with previous plaintext
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
