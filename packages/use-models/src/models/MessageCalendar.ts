import { MessageCalendarDay } from '@airgram/core'

/**
 * Contains information about found messages, split by days according to the option
 * "utc_time_offset"
 */
export class MessageCalendarBaseModel {
  public _: 'messageCalendar'

  /** Total number of found messages */
  public totalCount: number

  /** Information about messages sent */
  public days: MessageCalendarDay[]
}
