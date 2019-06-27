export class TDLibError extends Error {
  constructor (public readonly code: number, message?: string, public readonly type?: string) {
    super(message)
    this.name = 'TDLibError'
    this.code = code
    this.type = type
    this.stack = (new Error()).stack

    Error.call(this, this.message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TDLibError)
    } else {
      this.stack = (new Error()).stack
    }
  }

  public toString () {
    return this.message
  }
}
