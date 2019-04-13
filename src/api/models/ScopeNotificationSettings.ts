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
  /** True, if message content should be displayed in notifications */
  public showPreview: boolean
}
