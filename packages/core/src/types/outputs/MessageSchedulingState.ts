/** Contains information about the time when a scheduled message will be sent */
export type MessageSchedulingStateUnion = MessageSchedulingStateSendAtDate
  | MessageSchedulingStateSendWhenOnline

/** The message will be sent at the specified date */
export interface MessageSchedulingStateSendAtDate {
  _: 'messageSchedulingStateSendAtDate'
  /** Date the message will be sent. The date must be within 367 days in the future */
  sendDate: number
}

/**
 * The message will be sent when the peer will be online. Applicable to private chats
 * only and when the exact online status of the peer is known
 */
export interface MessageSchedulingStateSendWhenOnline {
  _: 'messageSchedulingStateSendWhenOnline'
}
