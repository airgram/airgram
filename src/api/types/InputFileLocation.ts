
export interface InputDocumentFileLocation {
  _: 'inputDocumentFileLocation'
  id: number
  access_hash: number
  version: number
}

export interface InputEncryptedFileLocation {
  _: 'inputEncryptedFileLocation'
  id: number
  access_hash: number
}

export interface InputFileLocation {
  _: 'inputFileLocation'
  volume_id: number
  local_id: number
  secret: number
}

export type InputFileLocationUnion = InputDocumentFileLocation
  | InputEncryptedFileLocation
  | InputFileLocation
