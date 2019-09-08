/** Describes a stream to which TDLib internal log is written */
export type LogStreamUnion = LogStreamDefault | LogStreamFile | LogStreamEmpty

/** The log is written to stderr or an OS specific log */
export interface LogStreamDefault {
  _: 'logStreamDefault'
}

/** The log is written to a file */
export interface LogStreamFile {
  _: 'logStreamFile'
  /** Path to the file to where the internal TDLib log will be written */
  path: string
  /**
   * Maximum size of the file to where the internal TDLib log is written before the file
   * will be auto-rotated
   */
  maxFileSize: number
}

/** The log is written nowhere */
export interface LogStreamEmpty {
  _: 'logStreamEmpty'
}
