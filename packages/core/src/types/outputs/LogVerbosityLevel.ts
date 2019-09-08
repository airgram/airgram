export type LogVerbosityLevelUnion = LogVerbosityLevel

/** Contains a TDLib internal log verbosity level */
export interface LogVerbosityLevel {
  _: 'logVerbosityLevel'
  /** Log verbosity level */
  verbosityLevel: number
}
