/** Contains information about notification settings for several chats */
export class ScopeNotificationSettingsBaseModel {
  public _: 'scopeNotificationSettings'

  /** Time left before notifications will be unmuted, in seconds */
  public muteFor: number

  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  public sound: string

  /** True, if message content must be displayed in notifications */
  public showPreview: boolean

  /**
   * True, if notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  public disablePinnedMessageNotifications: boolean

  /**
   * True, if notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  public disableMentionNotifications: boolean
}
