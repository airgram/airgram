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
  /** True, if message content should be displayed in notifications */
  public showPreview: boolean
}
