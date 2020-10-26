/** The log is written to a file */
export class LogStreamFileBaseModel {
  public _: 'logStreamFile'

  /** Path to the file to where the internal TDLib log will be written */
  public path: string

  /**
   * The maximum size of the file to where the internal TDLib log is written before the
   * file will be auto-rotated
   */
  public maxFileSize: number

  /** Pass true to additionally redirect stderr to the log file. Ignored on Windows */
  public redirectStderr: boolean
}
