import { MessageCalendarDay } from './index'

export type MessageCalendarUnion = MessageCalendar

/**
 * Contains information about found messages, split by days according to the option
 * "utc_time_offset"
 */
export interface MessageCalendar {
  _: 'messageCalendar'
  /** Total number of found messages */
  totalCount: number
  /** Information about messages sent */
  days: MessageCalendarDay[]
}
