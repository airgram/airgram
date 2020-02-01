/**
 * Describes whether there are some pending notification updates. Can be used to prevent
 * application from killing, while there are some pending notifications
 */
export class UpdateHavePendingNotificationsBaseModel {
  public _: 'updateHavePendingNotifications'

  /** True, if there are some delayed notification updates, which will be sent soon */
  public haveDelayedNotifications: boolean

  /**
   * True, if there can be some yet unreceived notifications, which are being fetched
   * from the server
   */
  public haveUnreceivedNotifications: boolean
}
