export type FilePartUnion = FilePart

/** Contains a part of a file */
export interface FilePart {
  _: 'filePart'
  /** File bytes */
  data: string
}
