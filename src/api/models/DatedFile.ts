import { File } from '../outputs'

/** File with the date it was uploaded */
export class DatedFileBaseModel {
  public _: 'datedFile'
  /** The file */
  public file: File
  /** Point in time (Unix timestamp) when the file was uploaded */
  public date: number
}
