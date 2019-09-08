import { Notification, NotificationGroupTypeUnion } from './index'

export type NotificationGroupUnion = NotificationGroup

/** Describes a group of notifications */
export interface NotificationGroup {
  _: 'notificationGroup'
  /** Unique persistent auto-incremented from 1 identifier of the notification group */
  id: number
  /** Type of the group */
  type: NotificationGroupTypeUnion
  /** Identifier of a chat to which all notifications in the group belong */
  chatId: number
  /** Total number of active notifications in the group */
  totalCount: number
  /** The list of active notifications */
  notifications: Notification[]
}
