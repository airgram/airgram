export type ScopeNotificationSettingsInputUnion = ScopeNotificationSettingsInput

/** Contains information about notification settings for several chats */
export interface ScopeNotificationSettingsInput {
  _: 'scopeNotificationSettings'
  /** Time left before notifications will be unmuted, in seconds */
  muteFor?: number
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  sound?: string
  /** True, if message content should be displayed in notifications */
  showPreview?: boolean
}
