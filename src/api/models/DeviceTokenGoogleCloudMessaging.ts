/** A token for Google Cloud Messaging */
export class DeviceTokenGoogleCloudMessagingBaseModel {
  public _: 'deviceTokenGoogleCloudMessaging'
  /** Device registration token; may be empty to de-register a device */
  public token: string
}
