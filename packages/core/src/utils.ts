import { Composer, TDLibError } from './components'
import { ApiResponse, BaseTdObject, Deferred, ErrorUnion, Middleware, MiddlewareOn } from './types'

export function pick<T, K extends keyof T> (obj: T, paths: K[]): Pick<T, K> {
  return { ...paths.reduce((mem, key) => ({ ...mem, [key]: obj[key] }), {}) } as Pick<T, K>
}

export function createDeferred<T = unknown> (): Deferred<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const deferred: Record<string, any> = {}
  deferred.promise = new Promise<T>((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })
  return deferred as Deferred<T>
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

export const on: MiddlewareOn<Middleware> = (
  predicateTypes: string | string[],
  ...fns: Middleware<any>[]
): Middleware => {
  return Composer.mount(predicateTypes, ...fns)
}
