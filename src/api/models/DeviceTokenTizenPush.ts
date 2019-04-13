/** A token for Tizen Push Service */
export class DeviceTokenTizenPushBaseModel {
  public _: 'deviceTokenTizenPush'
  /** Push service registration identifier; may be empty to de-register a device */
  public regId: string
}
