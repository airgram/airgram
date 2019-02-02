
export interface InputEncryptedFile {
  _: 'inputEncryptedFile'
  id: string
  access_hash: string
}

export interface InputEncryptedFileBigUploaded {
  _: 'inputEncryptedFileBigUploaded'
  id: string
  parts: number
  key_fingerprint: number
}

export interface InputEncryptedFileEmpty {
  _: 'inputEncryptedFileEmpty'
}

export interface InputEncryptedFileUploaded {
  _: 'inputEncryptedFileUploaded'
  id: string
  parts: number
  md5_checksum: string
  key_fingerprint: number
}

export type InputEncryptedFileUnion = InputEncryptedFile
  | InputEncryptedFileBigUploaded
  | InputEncryptedFileEmpty
  | InputEncryptedFileUploaded
