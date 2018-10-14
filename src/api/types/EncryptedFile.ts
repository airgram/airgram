
export interface EncryptedFile {
  _: 'encryptedFile'
  id: number
  access_hash: number
  size: number
  dc_id: number
  key_fingerprint: number
}

export interface EncryptedFileEmpty {
  _: 'encryptedFileEmpty'
}

export type EncryptedFileUnion = EncryptedFile
  | EncryptedFileEmpty
