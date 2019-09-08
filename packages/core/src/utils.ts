import { TDLibError } from './components'
import { ApiResponse, BaseTdObject, Deferred, ErrorUnion } from './types'

export function pick<T, K extends keyof T> (obj: T, paths: K[]): Pick<T, K> {
  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  return { ...paths.reduce((mem, key) => ({ ...mem, [key]: obj[key] }), {}) } as Pick<T, K>
}

export function createDeferred (): Deferred {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const deferred: Record<string, any> = {}
  deferred.promise = new Promise<void>((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })
  return deferred as Deferred
}

export function isError (obj: any): obj is ErrorUnion {
  return obj && ('_' in obj) && obj._ === 'error'
}

export function toObject<T extends BaseTdObject> ({ response }: ApiResponse<any, T>): T {
  if (isError(response)) {
    throw new TDLibError(response.code, response.message)
  }
  return response
}
