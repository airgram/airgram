
export interface InputFile {
  _: 'inputFile'
  id: number
  parts: number
  name: string
  md5_checksum: string
}

export interface InputFileBig {
  _: 'inputFileBig'
  id: number
  parts: number
  name: string
}

export type InputFileUnion = InputFile
  | InputFileBig
