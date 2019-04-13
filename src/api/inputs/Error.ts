export type ErrorInputUnion = ErrorInput

/** An object of this type can be returned on every function call, in case of an error */
export interface ErrorInput {
  _: 'error'
  /**
   * Error code; subject to future changes. If the error code is 406, the error message
   * must not be processed in any way and must not be displayed to the user
   */
  code?: number
  /** Error message; subject to future changes */
  message?: string
}
