/** Describes the types of chats to which notification settings are applied */
export type NotificationSettingsScopeUnion = NotificationSettingsScopePrivateChats
  | NotificationSettingsScopeGroupChats
  | NotificationSettingsScopeChannelChats

/**
 * Notification settings applied to all private and secret chats when the corresponding
 * chat setting has a default value
 */
export interface NotificationSettingsScopePrivateChats {
  _: 'notificationSettingsScopePrivateChats'
}

/**
 * Notification settings applied to all basic groups and supergroups when the corresponding
 * chat setting has a default value
 */
export interface NotificationSettingsScopeGroupChats {
  _: 'notificationSettingsScopeGroupChats'
}

/**
 * Notification settings applied to all channels when the corresponding chat setting
 * has a default value
 */
export interface NotificationSettingsScopeChannelChats {
  _: 'notificationSettingsScopeChannelChats'
}
