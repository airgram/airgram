import { ChatNotificationSettings } from '../outputs'

/** Notification settings for a chat were changed */
export class UpdateChatNotificationSettingsBaseModel {
  public _: 'updateChatNotificationSettings'
  /** Chat identifier */
  public chatId: number
  /** The new notification settings */
  public notificationSettings: ChatNotificationSettings
}
