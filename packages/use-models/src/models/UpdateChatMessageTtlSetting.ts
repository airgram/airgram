/** The message Time To Live setting for a chat was changed */
export class UpdateChatMessageTtlSettingBaseModel {
  public _: 'updateChatMessageTtlSetting'

  /** Chat identifier */
  public chatId: number

  /** New value of message_ttl_setting */
  public messageTtlSetting: number
}
