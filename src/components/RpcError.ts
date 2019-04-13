function RpcError ({ code, message, type }: { code: number, message?: string, type?: string }) {
  this.name = 'RpcError'
  this.code = code
  this.message = message
  this.type = type
  Error.call(this, this.message)

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
