import { Notification, NotificationGroupTypeUnion } from '@airgram/core'

/** A list of active notifications in a notification group has changed */
export class UpdateNotificationGroupBaseModel {
  public _: 'updateNotificationGroup'

  /** Unique notification group identifier */
  public notificationGroupId: number

  /** New type of the notification group */
  public type: NotificationGroupTypeUnion

  /** Identifier of a chat to which all notifications in the group belong */
  public chatId: number

  /** Chat identifier, which notification settings must be applied to the added notifications */
  public notificationSettingsChatId: number

  /** True, if the notifications should be shown without sound */
  public isSilent: boolean

  /**
   * Total number of unread notifications in the group, can be bigger than number of active
   * notifications
   */
  public totalCount: number

  /** List of added group notifications, sorted by notification ID */
  public addedNotifications: Notification[]

  /** Identifiers of removed group notifications, sorted by notification ID */
  public removedNotificationIds: number[]
}
