export type ScopeNotificationSettingsUnion = ScopeNotificationSettings

/** Contains information about notification settings for several chats */
export interface ScopeNotificationSettings {
  _: 'scopeNotificationSettings'
  /** Time left before notifications will be unmuted, in seconds */
  muteFor: number
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  sound: string
  /** True, if message content must be displayed in notifications */
  showPreview: boolean
  /**
   * True, if notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  disablePinnedMessageNotifications: boolean
  /**
   * True, if notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  disableMentionNotifications: boolean
}
