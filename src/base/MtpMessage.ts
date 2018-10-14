/*tslint:disable:prefer-for-of*/

import { provide } from 'inversify-binding-decorators'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

@provide(TYPES.MtpMessage)
export default class MtpMessage implements ag.MtpMessage {
  public static factory (
    createInstance: () => ag.MtpMessage,
    message: Partial<ag.MtpMessage>,
    options?: Partial<ag.MtpOptions>
  ) {
    const instance = createInstance()
    const extraOptions: Partial<ag.MtpMessage> = {}
    if (options) {
      ['noResponse', 'noSchedule', 'notContentRelated'].forEach((name) => {
        if (name in options) {
          extraOptions[name] = options[name]
        }
      })
    }
    Object.assign(instance, message, extraOptions)
    return instance
  }

  public body?: Uint8Array | number[]
  public deferred?: ag.DeferredResponse
  public inner?: string[]
  public isAcked?: boolean
  public isApi?: boolean
  public isContainer?: boolean
  public longPoll?: boolean
  public maxLength?: number
  public messageId: string
  public noResponse?: boolean
  public noSchedule?: boolean
  public notContentRelated?: boolean
  public resultType?: string
  public seqNo: number
  public singleInRequest?: boolean
}
