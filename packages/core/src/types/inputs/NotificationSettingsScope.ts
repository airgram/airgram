/** Describes the types of chats to which notification settings are relevant */
export type NotificationSettingsScopeInputUnion = NotificationSettingsScopePrivateChatsInput
  | NotificationSettingsScopeGroupChatsInput
  | NotificationSettingsScopeChannelChatsInput

/**
 * Notification settings applied to all private and secret chats when the corresponding
 * chat setting has a default value
 */
export interface NotificationSettingsScopePrivateChatsInput {
  _: 'notificationSettingsScopePrivateChats'
}

/**
 * Notification settings applied to all basic groups and supergroups when the corresponding
 * chat setting has a default value
 */
export interface NotificationSettingsScopeGroupChatsInput {
  _: 'notificationSettingsScopeGroupChats'
}

/**
 * Notification settings applied to all channels when the corresponding chat setting
 * has a default value
 */
export interface NotificationSettingsScopeChannelChatsInput {
  _: 'notificationSettingsScopeChannelChats'
}
