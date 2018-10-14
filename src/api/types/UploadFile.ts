import { CdnFileHashUnion } from './CdnFileHash'
import { StorageFileTypeUnion } from './StorageFileType'

export interface UploadFile {
  _: 'upload.file'
  type: StorageFileTypeUnion
  mtime: number
  bytes: number[]
}

export interface UploadFileCdnRedirect {
  _: 'upload.fileCdnRedirect'
  dc_id: number
  file_token: number[]
  encryption_key: number[]
  encryption_iv: number[]
  cdn_file_hashes: CdnFileHashUnion[]
}

export type UploadFileUnion = UploadFile
  | UploadFileCdnRedirect
