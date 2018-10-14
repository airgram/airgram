
export interface InputEncryptedFile {
  _: 'inputEncryptedFile'
  id: number
  access_hash: number
}

export interface InputEncryptedFileBigUploaded {
  _: 'inputEncryptedFileBigUploaded'
  id: number
  parts: number
  key_fingerprint: number
}

export interface InputEncryptedFileEmpty {
  _: 'inputEncryptedFileEmpty'
}

export interface InputEncryptedFileUploaded {
  _: 'inputEncryptedFileUploaded'
  id: number
  parts: number
  md5_checksum: string
  key_fingerprint: number
}

export type InputEncryptedFileUnion = InputEncryptedFile
  | InputEncryptedFileBigUploaded
  | InputEncryptedFileEmpty
  | InputEncryptedFileUploaded
