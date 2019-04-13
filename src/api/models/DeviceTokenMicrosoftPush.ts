/** A token for Microsoft Push Notification Service */
export class DeviceTokenMicrosoftPushBaseModel {
  public _: 'deviceTokenMicrosoftPush'
  /** Push notification channel URI; may be empty to de-register a device */
  public channelUri: string
}
