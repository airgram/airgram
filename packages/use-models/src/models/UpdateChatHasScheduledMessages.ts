/** A chat's has_scheduled_messages field has changed */
export class UpdateChatHasScheduledMessagesBaseModel {
  public _: 'updateChatHasScheduledMessages'

  /** Chat identifier */
  public chatId: number

  /** New value of has_scheduled_messages */
  public hasScheduledMessages: boolean
}
