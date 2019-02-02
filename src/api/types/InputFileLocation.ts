
export interface InputDocumentFileLocation {
  _: 'inputDocumentFileLocation'
  id: string
  access_hash: string
  version: number
}

export interface InputEncryptedFileLocation {
  _: 'inputEncryptedFileLocation'
  id: string
  access_hash: string
}

export interface InputFileLocation {
  _: 'inputFileLocation'
  volume_id: string
  local_id: number
  secret: string
}

export type InputFileLocationUnion = InputDocumentFileLocation
  | InputEncryptedFileLocation
  | InputFileLocation
