function RpcError (
  { type, code, message, original, ...options }: {
    type: string,
    code: number,
    message?: string,
    original?: Error,
    url?: string
  }
) {
  this.name = 'RpcError'
  this.type = type
  this.code = code
  this.message = `CODE#${code} ${type}`
  this.original = original
  Error.call(this, this.message)
  Object.assign(this, options)

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, RpcError)
  } else {
    this.stack = (new Error()).stack
  }

  this.toString = function () {
    return this.message
  }
}

RpcError.prototype = Object.create(Error.prototype)

export default RpcError
