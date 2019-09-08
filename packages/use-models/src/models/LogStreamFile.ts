/** The log is written to a file */
export class LogStreamFileBaseModel {
  public _: 'logStreamFile'

  /** Path to the file to where the internal TDLib log will be written */
  public path: string

  /**
   * Maximum size of the file to where the internal TDLib log is written before the file
   * will be auto-rotated
   */
  public maxFileSize: number
}
