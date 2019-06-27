import * as ag from '../types/airgram'
import { Composer, optional } from './Composer'

export class Updates<ContextT> extends Composer<ContextT> implements ag.Updates<ContextT> {
  public middleware (): ag.MiddlewarePromise<any> {
    return optional((ctx) => ctx.update, this.handler)
  }
}
