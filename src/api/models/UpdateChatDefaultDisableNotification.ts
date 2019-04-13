/**
 * The value of the default disable_notification parameter, used when a message is sent
 * to the chat, was changed
 */
export class UpdateChatDefaultDisableNotificationBaseModel {
  public _: 'updateChatDefaultDisableNotification'
  /** Chat identifier */
  public chatId: number
  /** The new default_disable_notification value */
  public defaultDisableNotification: boolean
}
