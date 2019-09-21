/* tslint:disable:no-empty */

import { BaseTdObject, Composer as BaseComposer, Middleware, MiddlewareFn } from '../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NextFn = () => any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const noop: NextFn = (): any => {}

function normalizePredicateArguments (argument: string | string[], prefix?: string): string[] {
  const args = Array.isArray(argument) ? argument : [argument]
  return args
    .filter((item): string | string[] => item)
    .map((arg): string => arg && prefix && !arg.startsWith(prefix) ? `${prefix}${arg}` : arg)
}

function unwrap<ContextT> (
  handler: Middleware<ContextT>
): MiddlewareFn<ContextT> {
  if (handler && 'middleware' in handler) {
    return handler.middleware()
  }
  return handler
}

function safePassThru<ContextT> (): MiddlewareFn<ContextT> {
  return (
    _ctx: ContextT, next: NextFn | unknown): Promise<unknown> => typeof next === 'function' ? next() : Promise.resolve()
}

function lazy<ContextT> (
  factoryFn: ((ctx: ContextT) => Promise<Middleware<ContextT>>)
): MiddlewareFn<ContextT> {
  return (ctx: ContextT, next?: NextFn): Promise<Middleware<ContextT>> => Promise.resolve(factoryFn(ctx))
    .then((middleware: Middleware<ContextT>): Middleware<ContextT> => unwrap<ContextT>(middleware)(ctx, next || noop))
}

function compose<ContextT> (middlewares: Middleware<ContextT>[]): MiddlewareFn<ContextT> {
  if (!Array.isArray(middlewares)) {
    throw new Error('Middleware list must be an array')
  }
  if (middlewares.length === 0) {
    return safePassThru()
  }
  if (middlewares.length === 1) {
    return unwrap(middlewares[0])
  }
  return (ctx: ContextT, next?: MiddlewareFn<ContextT>): Promise<unknown> => {
    let index = -1
    return (function execute (i: number): Promise<unknown> {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'))
      }
      index = i
      const handler: MiddlewareFn<ContextT> | undefined = unwrap(middlewares[i]) || next
      if (!handler) {
        return Promise.resolve()
      }
      try {
        return Promise.resolve(handler(ctx, (): Promise<unknown> => execute(i + 1)))
      } catch (error) {
        return Promise.reject(error)
      }
    })(0)
  }
}

function branch<ContextT> (
  predicate: unknown,
  trueMiddleware: Middleware<ContextT>,
  falseMiddleware: Middleware<ContextT>
): MiddlewareFn<ContextT> {
  if (typeof predicate !== 'function') {
    return unwrap<ContextT>(predicate ? trueMiddleware : falseMiddleware)
  }
  return lazy((ctx): Promise<Middleware<ContextT>> => Promise.resolve(predicate(ctx))
    .then((value): Middleware<ContextT> => value ? trueMiddleware : falseMiddleware))
}

function optional<ContextT> (predicate: unknown, ...fns: Middleware<ContextT>[]): MiddlewareFn<ContextT> {
  return branch(predicate, compose(fns), safePassThru())
}

function mount<ContextT extends { _: string }> (
  predicateType: string | string[], ...fns: Middleware<ContextT>[]): Middleware<ContextT> {
  const predicateTypes = normalizePredicateArguments(predicateType)
  const predicate = (ctx: ContextT): boolean => '_' in ctx && predicateTypes.includes(ctx._)
  return optional(predicate, ...fns)
}

function fork<ContextT> (middleware: Middleware<ContextT>): Middleware<ContextT> {
  return (_ctx: unknown, next: NextFn): Middleware<ContextT> => {
    setTimeout(unwrap(middleware), 0)
    return next()
  }
}

// function tap (handler) {
//   return (ctx, next) => Promise.resolve(handler(ctx))
//     .then(() => next())
//     .catch(() => next())
// }
//
// export function drop<ContextT> (predicate): MiddlewarePromise<ContextT> {
//   return branch(predicate, noop, safePassThru())
// }

function filter<ContextT> (predicate: unknown): Middleware<ContextT> {
  return branch(predicate, safePassThru(), noop)
}

class Composer<ContextT extends BaseTdObject> implements BaseComposer<ContextT> {
  public static compose = compose

  public static fork = fork

  public static filter = filter

  public static branch = branch

  public static mount = mount

  public static optional = optional

  public static noop = noop

  protected handler: MiddlewareFn<ContextT>

  public constructor (...fns: Middleware<ContextT>[]) {
    this.handler = compose<ContextT>(fns)
  }

  public middleware (): MiddlewareFn<ContextT> {
    return this.handler
  }

  public on (
    predicateTypes: string | string[],
    ...fns: Middleware<ContextT>[]
  ): void {
    this.use(mount<ContextT>(predicateTypes, ...fns))
  }

  public use (...fns: Middleware<ContextT>[]): void {
    this.handler = compose<ContextT>([this.handler, ...fns])
  }
}

export { Composer }
