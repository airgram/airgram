import { NotificationTypeUnion } from '@airgram/core'

/** Contains information about a notification */
export class NotificationBaseModel {
  public _: 'notification'

  /** Unique persistent identifier of this notification */
  public id: number

  /** Notification date */
  public date: number

  /** True, if the notification was initially silent */
  public isSilent: boolean

  /** Notification type */
  public type: NotificationTypeUnion
}
