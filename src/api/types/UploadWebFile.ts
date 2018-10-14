import { StorageFileTypeUnion } from './StorageFileType'

export interface UploadWebFile {
  _: 'upload.webFile'
  size: number
  mime_type: string
  file_type: StorageFileTypeUnion
  mtime: number
  bytes: number[]
}

export type UploadWebFileUnion = UploadWebFile
