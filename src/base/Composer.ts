/*tslint:disable:no-empty*/
/*tslint:disable:no-console*/

import { provide } from 'inversify-binding-decorators'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

type NoopFn = () => void
const noop: NoopFn = () => {}

function normalizePredicateArguments (argument: string | string[], prefix?: string): string[] {
  const args = Array.isArray(argument) ? argument : [argument]
  return args
    .filter((item) => item)
    .map((arg) => arg && prefix && !arg.startsWith(prefix) ? `${prefix}${arg}` : arg)
}

@provide(TYPES.Composer)
export default class Composer<ContextT = any> {
  public static fork (middleware) {
    return (ctx, next) => {
      setImmediate(Composer.unwrap(middleware), ctx, Composer.safePassThru())
      return next()
    }
  }

  public static tap (handler) {
    return (ctx, next) => Promise.resolve(handler(ctx))
      .then(() => next())
      .catch(() => next())
  }

  public static passThru<ContextT> (): ag.MiddlewareFn<ContextT> {
    return (ctx: ContextT, next: ag.NextFn) => next()
  }

  public static safePassThru<ContextT> (): ag.MiddlewareFn<ContextT> {
    return (ctx: ContextT, next: ag.NextFn | any) => typeof next === 'function' ? next() : Promise.resolve()
  }

  public static lazy<ContextT> (
    factoryFn: ((ctx: ContextT) => Promise<ag.Middleware<ContextT>>) | any
  ): ag.MiddlewarePromise<ContextT> {
    if (typeof factoryFn !== 'function') {
      throw new Error('Argument must be a function')
    }
    return (ctx: ContextT, next: (ag.NextFn)) => Promise.resolve(factoryFn(ctx))
      .then((middleware: ag.Middleware<ContextT>) => Composer.unwrap<ContextT>(middleware)(ctx, next))
  }

  public static branch<ContextT> (
    predicate: any,
    trueMiddleware: ag.MiddlewareFn<any>,
    falseMiddleware: ag.MiddlewareFn<any>
  ): ag.MiddlewarePromise<ContextT> {
    if (typeof predicate !== 'function') {
      return predicate ? trueMiddleware : falseMiddleware
    }
    return Composer.lazy((ctx) => Promise.resolve(predicate(ctx))
      .then((value) => value ? trueMiddleware : falseMiddleware))
  }

  public static optional<ContextT> (predicate, ...fns): ag.MiddlewarePromise<ContextT> {
    return Composer.branch(predicate, Composer.compose(fns), Composer.safePassThru())
  }

  public static filter<ContextT> (predicate): ag.MiddlewarePromise<ContextT> {
    return Composer.branch(predicate, Composer.safePassThru(), noop)
  }

  public static drop<ContextT> (predicate): ag.MiddlewarePromise<ContextT> {
    return Composer.branch(predicate, noop, Composer.safePassThru())
  }

  public static mount<ContextT> (predicateType, ...fns): ag.MiddlewarePromise<ContextT> {
    const predicateTypes = normalizePredicateArguments(predicateType)
    const predicate = (ctx) => predicateTypes.includes(ctx._)
    return Composer.optional(predicate, ...fns)
  }

  public static unwrap<ContextT> (
    handler: ag.Middleware<ContextT> | any
  ): ag.MiddlewarePromise<ContextT> {
    if (handler
      && 'middleware' in handler
      && typeof handler.middleware === 'function') {
      return handler.middleware() as ag.MiddlewarePromise<ContextT>
    }
    return handler as (ag.MiddlewarePromise<ContextT>)
  }

  public static compose<ContextT> (middlewares: Array<ag.Middleware<ContextT>>): ag.MiddlewarePromise<ContextT> {
    if (!Array.isArray(middlewares)) {
      throw new Error('Middleware list must be an array')
    }
    if (middlewares.length === 0) {
      return Composer.safePassThru()
    }
    if (middlewares.length === 1) {
      return Composer.unwrap(middlewares[0])
    }
    return (ctx: ContextT, next?: ag.MiddlewarePromise<ContextT>) => {
      let index = -1
      return (function execute (i) {
        if (i <= index) {
          return Promise.reject(new Error('next() called multiple times'))
        }
        index = i
        const handler: ag.MiddlewarePromise<ContextT> | undefined = Composer.unwrap(middlewares[i]) || next
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

  protected handler: ag.MiddlewarePromise<ContextT | any>

  constructor (...fns: Array<ag.Middleware<ContextT>>) {
    this.handler = Composer.compose<ContextT>(fns)
  }

  public middleware<MiddlewareContextT = ContextT> (): ag.MiddlewarePromise<MiddlewareContextT> {
    return this.handler
  }

  public on (
    predicateTypes: string | string[],
    ...fns: Array<ag.Middleware<ContextT>>
  ): this {
    return this.use(Composer.mount(predicateTypes, ...fns))
  }

  public use (...fns: Array<ag.Middleware<ContextT>>): this {
    this.handler = Composer.compose<ContextT>([this.handler, ...fns])
    return this
  }
}
