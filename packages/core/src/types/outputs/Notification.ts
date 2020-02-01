import { NotificationTypeUnion } from './index'

export type NotificationUnion = Notification

/** Contains information about a notification */
export interface Notification {
  _: 'notification'
  /** Unique persistent identifier of this notification */
  id: number
  /** Notification date */
  date: number
  /** True, if the notification was initially silent */
  isSilent: boolean
  /** Notification type */
  type: NotificationTypeUnion
}
