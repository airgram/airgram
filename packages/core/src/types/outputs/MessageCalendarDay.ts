import { Message } from './index'

export type MessageCalendarDayUnion = MessageCalendarDay

/** Contains information about found messages sent on a specific day */
export interface MessageCalendarDay {
  _: 'messageCalendarDay'
  /** Total number of found messages sent on the day */
  totalCount: number
  /** First message sent on the day */
  message: Message
}
