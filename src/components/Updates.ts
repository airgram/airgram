import * as ag from '../types'
import Composer, { optional } from './Composer'

export default class Updates<ContextT> extends Composer<ContextT> {
  public middleware (): ag.MiddlewarePromise<any> {
    return optional((ctx) => ctx.update, this.handler)
  }
}
