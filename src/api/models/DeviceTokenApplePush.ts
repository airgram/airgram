/** A token for Apple Push Notification service */
export class DeviceTokenApplePushBaseModel {
  public _: 'deviceTokenApplePush'
  /** Device token; may be empty to de-register a device */
  public deviceToken: string
  /** True, if App Sandbox is enabled */
  public isAppSandbox: boolean
}
