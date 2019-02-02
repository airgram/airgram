
export interface InputFile {
  _: 'inputFile'
  id: string
  parts: number
  name: string
  md5_checksum: string
}

export interface InputFileBig {
  _: 'inputFileBig'
  id: string
  parts: number
  name: string
}

export type InputFileUnion = InputFile
  | InputFileBig
