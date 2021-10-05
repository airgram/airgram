/** The message TTL setting was changed */
export class ChatEventMessageTtlSettingChangedBaseModel {
  public _: 'chatEventMessageTtlSettingChanged'

  /** Previous value of message_ttl_setting */
  public oldMessageTtlSetting: number

  /** New value of message_ttl_setting */
  public newMessageTtlSetting: number
}
