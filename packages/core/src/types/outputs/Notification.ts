import { NotificationTypeUnion } from './index'

export type NotificationUnion = Notification

/** Contains information about a notification */
export interface Notification {
  _: 'notification'
  /** Unique persistent identifier of this notification */
  id: number
  /** Notification date */
  date: number
  /** Notification type */
  type: NotificationTypeUnion
}
