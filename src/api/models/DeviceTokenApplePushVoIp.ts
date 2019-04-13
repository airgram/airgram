/** A token for Apple Push Notification service VoIP notifications */
export class DeviceTokenApplePushVoIpBaseModel {
  public _: 'deviceTokenApplePushVoIP'
  /** Device token; may be empty to de-register a device */
  public deviceToken: string
  /** True, if App Sandbox is enabled */
  public isAppSandbox: boolean
}
