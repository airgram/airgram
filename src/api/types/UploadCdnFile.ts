
export interface UploadCdnFile {
  _: 'upload.cdnFile'
  bytes: number[]
}

export interface UploadCdnFileReuploadNeeded {
  _: 'upload.cdnFileReuploadNeeded'
  request_token: number[]
}

export type UploadCdnFileUnion = UploadCdnFile
  | UploadCdnFileReuploadNeeded
