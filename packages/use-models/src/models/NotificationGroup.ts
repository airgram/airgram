import { Notification, NotificationGroupTypeUnion } from '@airgram/core'

/** Describes a group of notifications */
export class NotificationGroupBaseModel {
  public _: 'notificationGroup'

  /** Unique persistent auto-incremented from 1 identifier of the notification group */
  public id: number

  /** Type of the group */
  public type: NotificationGroupTypeUnion

  /** Identifier of a chat to which all notifications in the group belong */
  public chatId: number

  /** Total number of active notifications in the group */
  public totalCount: number

  /** The list of active notifications */
  public notifications: Notification[]
}
