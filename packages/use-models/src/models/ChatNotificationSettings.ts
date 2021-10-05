/** Contains information about notification settings for a chat */
export class ChatNotificationSettingsBaseModel {
  public _: 'chatNotificationSettings'

  /**
   * If true, mute_for is ignored and the value for the relevant type of chat is used
   * instead
   */
  public useDefaultMuteFor: boolean

  /** Time left before notifications will be unmuted, in seconds */
  public muteFor: number

  /** If true, sound is ignored and the value for the relevant type of chat is used instead */
  public useDefaultSound: boolean

  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  public sound: string

  /**
   * If true, show_preview is ignored and the value for the relevant type of chat is used
   * instead
   */
  public useDefaultShowPreview: boolean

  /** True, if message content must be displayed in notifications */
  public showPreview: boolean

  /**
   * If true, disable_pinned_message_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  public useDefaultDisablePinnedMessageNotifications: boolean

  /**
   * If true, notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  public disablePinnedMessageNotifications: boolean

  /**
   * If true, disable_mention_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  public useDefaultDisableMentionNotifications: boolean

  /**
   * If true, notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  public disableMentionNotifications: boolean
}
