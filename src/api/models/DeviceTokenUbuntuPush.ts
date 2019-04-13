/** A token for Ubuntu Push Client service */
export class DeviceTokenUbuntuPushBaseModel {
  public _: 'deviceTokenUbuntuPush'
  /** Token; may be empty to de-register a device */
  public token: string
}
