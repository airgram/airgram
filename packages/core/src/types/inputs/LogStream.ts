/** Describes a stream to which TDLib internal log is written */
export type LogStreamInputUnion = LogStreamDefaultInput
  | LogStreamFileInput
  | LogStreamEmptyInput

/** The log is written to stderr or an OS specific log */
export interface LogStreamDefaultInput {
  _: 'logStreamDefault'
}

/** The log is written to a file */
export interface LogStreamFileInput {
  _: 'logStreamFile'
  /** Path to the file to where the internal TDLib log will be written */
  path?: string
  /**
   * The maximum size of the file to where the internal TDLib log is written before the
   * file will be auto-rotated
   */
  maxFileSize?: number
}

/** The log is written nowhere */
export interface LogStreamEmptyInput {
  _: 'logStreamEmpty'
}
