import { File } from './index'

export type DatedFileUnion = DatedFile

/** File with the date it was uploaded */
export interface DatedFile {
  _: 'datedFile'
  /** The file */
  file: File
  /** Point in time (Unix timestamp) when the file was uploaded */
  date: number
}
