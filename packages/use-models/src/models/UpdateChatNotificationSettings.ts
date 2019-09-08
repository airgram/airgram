import { ChatNotificationSettings } from '@airgram/core'

/** Notification settings for a chat were changed */
export class UpdateChatNotificationSettingsBaseModel {
  public _: 'updateChatNotificationSettings'

  /** Chat identifier */
  public chatId: number

  /** The new notification settings */
  public notificationSettings: ChatNotificationSettings
}
