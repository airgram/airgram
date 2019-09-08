export type ChatNotificationSettingsUnion = ChatNotificationSettings

/** Contains information about notification settings for a chat */
export interface ChatNotificationSettings {
  _: 'chatNotificationSettings'
  /**
   * If true, mute_for is ignored and the value for the relevant type of chat is used
   * instead
   */
  useDefaultMuteFor: boolean
  /** Time left before notifications will be unmuted, in seconds */
  muteFor: number
  /** If true, sound is ignored and the value for the relevant type of chat is used instead */
  useDefaultSound: boolean
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  sound: string
  /**
   * If true, show_preview is ignored and the value for the relevant type of chat is used
   * instead
   */
  useDefaultShowPreview: boolean
  /** True, if message content should be displayed in notifications */
  showPreview: boolean
  /**
   * If true, disable_pinned_message_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  useDefaultDisablePinnedMessageNotifications: boolean
  /**
   * If true, notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  disablePinnedMessageNotifications: boolean
  /**
   * If true, disable_mention_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  useDefaultDisableMentionNotifications: boolean
  /**
   * If true, notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  disableMentionNotifications: boolean
}
