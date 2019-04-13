/** A token for Windows Push Notification Services */
export class DeviceTokenWindowsPushBaseModel {
  public _: 'deviceTokenWindowsPush'
  /**
   * The access token that will be used to send notifications; may be empty to de-register
   * a device
   */
  public accessToken: string
}
