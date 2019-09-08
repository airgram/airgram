import {
  NotificationSettingsScopeUnion,
  ScopeNotificationSettings
} from '@airgram/core'

/** Notification settings for some type of chats were updated */
export class UpdateScopeNotificationSettingsBaseModel {
  public _: 'updateScopeNotificationSettings'

  /** Types of chats for which notification settings were updated */
  public scope: NotificationSettingsScopeUnion

  /** The new notification settings */
  public notificationSettings: ScopeNotificationSettings
}
