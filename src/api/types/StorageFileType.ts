
export interface StorageFileGif {
  _: 'storage.fileGif'
}

export interface StorageFileJpeg {
  _: 'storage.fileJpeg'
}

export interface StorageFileMov {
  _: 'storage.fileMov'
}

export interface StorageFileMp3 {
  _: 'storage.fileMp3'
}

export interface StorageFileMp4 {
  _: 'storage.fileMp4'
}

export interface StorageFilePartial {
  _: 'storage.filePartial'
}

export interface StorageFilePdf {
  _: 'storage.filePdf'
}

export interface StorageFilePng {
  _: 'storage.filePng'
}

export interface StorageFileUnknown {
  _: 'storage.fileUnknown'
}

export interface StorageFileWebp {
  _: 'storage.fileWebp'
}

export type StorageFileTypeUnion = StorageFileGif
  | StorageFileJpeg
  | StorageFileMov
  | StorageFileMp3
  | StorageFileMp4
  | StorageFilePartial
  | StorageFilePdf
  | StorageFilePng
  | StorageFileUnknown
  | StorageFileWebp
