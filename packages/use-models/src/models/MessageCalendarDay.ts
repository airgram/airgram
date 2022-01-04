import { Message } from '@airgram/core'

/** Contains information about found messages sent on a specific day */
export class MessageCalendarDayBaseModel {
  public _: 'messageCalendarDay'

  /** Total number of found messages sent on the day */
  public totalCount: number

  /** First message sent on the day */
  public message: Message
}
