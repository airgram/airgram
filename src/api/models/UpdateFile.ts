import { File } from '../outputs'

/** Information about a file was updated */
export class UpdateFileBaseModel {
  public _: 'updateFile'
  /** New data about the file */
  public file: File
}
