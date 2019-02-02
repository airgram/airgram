
export interface EncryptedFile {
  _: 'encryptedFile'
  id: string
  access_hash: string
  size: number
  dc_id: number
  key_fingerprint: number
}

export interface EncryptedFileEmpty {
  _: 'encryptedFileEmpty'
}

export type EncryptedFileUnion = EncryptedFile
  | EncryptedFileEmpty
