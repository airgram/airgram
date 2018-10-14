/*tslint:disable:no-bitwise*/

import { provide } from 'inversify-binding-decorators'
import { intsToLong, nextRandomInt, now } from '../helpers'
import { ag } from '../interfaces'
import TYPES from '../ioc/types'

@provide(TYPES.MtpTimeManager)
export default class MtpTimeManager implements ag.MtpTimeManager {
  public static factory (createInstance: () => ag.MtpTimeManager, client: ag.Client) {
    const instance = createInstance()
    instance.client = client
    if (client.mtpState.serverTimeOffset) {
      instance.client = client
    }
    return instance
  }

  public client: ag.Client
  private lastMessageId: [number, number] = [0, 0]

  get timeOffset () {
    return this.client.mtpState.serverTimeOffset || 0
  }

  public applyServerTime (serverTime: number, localTime?: number): boolean {
    const newTimeOffset = serverTime - Math.floor((localTime || now()) / 1000)
    const changed = Math.abs(this.timeOffset - newTimeOffset) > 10

    this.lastMessageId = [0, 0]
    this.client.mtpState.serverTimeOffset = newTimeOffset

    return changed
  }

  public generateMessageId (): string {
    const timeTicks = now()
    const timeSec = Math.floor(timeTicks / 1000) + this.timeOffset
    const timeMSec = timeTicks % 1000
    const random = nextRandomInt(0xFFFF)

    let messageId: [number, number] = [timeSec, (timeMSec << 21) | (random << 3) | 4]
    if (this.lastMessageId[0] > messageId[0] ||
      (this.lastMessageId[0] === messageId[0] && this.lastMessageId[1] >= messageId[1])) {
      messageId = [this.lastMessageId[0], this.lastMessageId[1] + 4]
    }
    this.lastMessageId = messageId

    return intsToLong(messageId[0], messageId[1])
  }
}
