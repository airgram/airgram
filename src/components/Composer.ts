/*tslint:disable:no-empty*/

import * as ag from '../types/airgram'

type NoopFn = () => void
const noop: NoopFn = () => {}

function normalizePredicateArguments (argument: string | string[], prefix?: string): string[] {
  const args = Array.isArray(argument) ? argument : [argument]
  return args
    .filter((item) => item)
    .map((arg) => arg && prefix && !arg.startsWith(prefix) ? `${prefix}${arg}` : arg)
}

function unwrap<ContextT> (
  handler: ag.Middleware<ContextT> | any
): ag.MiddlewarePromise<ContextT> {
  if (handler
    && 'middleware' in handler
    && typeof handler.middleware === 'function') {
    return handler.middleware() as ag.MiddlewarePromise<ContextT>
  }
  return handler as (ag.MiddlewarePromise<ContextT>)
}

function safePassThru<ContextT> (): ag.MiddlewareFn<ContextT> {
  return (ctx: ContextT, next: ag.NextFn | any) => typeof next === 'function' ? next() : Promise.resolve()
}

function lazy<ContextT> (
  factoryFn: ((ctx: ContextT) => Promise<ag.Middleware<ContextT>>) | any
): ag.MiddlewarePromise<ContextT> {
  if (typeof factoryFn !== 'function') {
    throw new Error('Argument must be a function')
  }
  return (ctx: ContextT, next: (ag.NextFn)) => Promise.resolve(factoryFn(ctx))
    .then((middleware: ag.Middleware<ContextT>) => unwrap<ContextT>(middleware)(ctx, next))
}

function mount<ContextT> (predicateType, ...fns): ag.MiddlewarePromise<ContextT> {
  const predicateTypes = normalizePredicateArguments(predicateType)
  const predicate = (ctx) => predicateTypes.includes(ctx._)
  return optional(predicate, ...fns)
}

export function fork (middleware) {
  return (ctx, next) => {
    setTimeout(unwrap(middleware), ctx, safePassThru(), 0)
    return next()
  }
}

// function tap (handler) {
//   return (ctx, next) => Promise.resolve(handler(ctx))
//     .then(() => next())
//     .catch(() => next())
// }
//
// export function drop<ContextT> (predicate): ag.MiddlewarePromise<ContextT> {
//   return branch(predicate, noop, safePassThru())
// }

export function filter<ContextT> (predicate): ag.MiddlewarePromise<ContextT> {
  return branch(predicate, safePassThru(), noop)
}

export function branch<ContextT> (
  predicate: any,
  trueMiddleware: ag.MiddlewareFn<any>,
  falseMiddleware: ag.MiddlewareFn<any>
): ag.MiddlewarePromise<ContextT> {
  if (typeof predicate !== 'function') {
    return predicate ? trueMiddleware : falseMiddleware
  }
  return lazy((ctx) => Promise.resolve(predicate(ctx))
    .then((value) => value ? trueMiddleware : falseMiddleware))
}

export function optional<ContextT> (predicate, ...fns): ag.MiddlewarePromise<ContextT> {
  return branch(predicate, compose(fns), safePassThru())
}

export function compose<ContextT> (middlewares: Array<ag.Middleware<ContextT>>): ag.MiddlewarePromise<ContextT> {
  if (!Array.isArray(middlewares)) {
    throw new Error('Middleware list must be an array')
  }
  if (middlewares.length === 0) {
    return safePassThru()
  }
  if (middlewares.length === 1) {
    return unwrap(middlewares[0])
  }
  return (ctx: ContextT, next?: ag.MiddlewarePromise<ContextT>) => {
    let index = -1
    return (function execute (i) {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'))
      }
      index = i
      const handler: ag.MiddlewarePromise<ContextT> | undefined = unwrap(middlewares[i]) || next
      if (!handler) {
        return Promise.resolve()
      }
      try {
        return Promise.resolve(handler(ctx, () => execute(i + 1)))
      } catch (error) {
        return Promise.reject(error)
      }
    })(0)
  }
}

class Composer<ContextT = any> implements ag.Composer<ContextT> {
  protected handler: ag.MiddlewarePromise<ContextT | any>

  constructor (...fns: Array<ag.Middleware<ContextT>>) {
    this.handler = compose<ContextT>(fns)
  }

  public middleware<MiddlewareContextT = ContextT> (): ag.MiddlewarePromise<MiddlewareContextT> {
    return this.handler
  }

  public on (
    predicateTypes: string | string[],
    ...fns: Array<ag.Middleware<ContextT>>
  ): ag.Composer<ContextT> {
    return this.use(mount(predicateTypes, ...fns))
  }

  public use (...fns: Array<ag.Middleware<ContextT>>): ag.Composer<ContextT> {
    this.handler = compose<ContextT>([this.handler, ...fns])
    return this
  }
}

export { Composer }
