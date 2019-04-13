/** Describes the types of chats to which notification settings are applied */
export type NotificationSettingsScopeInputUnion = NotificationSettingsScopePrivateChatsInput
  | NotificationSettingsScopeGroupChatsInput

/**
 * Notification settings applied to all private and secret chats when the corresponding
 * chat setting has a default value
 */
export interface NotificationSettingsScopePrivateChatsInput {
  _: 'notificationSettingsScopePrivateChats'
}

/**
 * Notification settings applied to all basic groups, supergroups and channels when
 * the corresponding chat setting has a default value
 */
export interface NotificationSettingsScopeGroupChatsInput {
  _: 'notificationSettingsScopeGroupChats'
}
