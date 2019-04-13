/** A token for Simple Push API for Firefox OS */
export class DeviceTokenSimplePushBaseModel {
  public _: 'deviceTokenSimplePush'
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  public endpoint: string
}
