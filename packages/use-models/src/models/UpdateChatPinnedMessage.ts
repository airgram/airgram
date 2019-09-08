/** The chat pinned message was changed */
export class UpdateChatPinnedMessageBaseModel {
  public _: 'updateChatPinnedMessage'

  /** Chat identifier */
  public chatId: number

  /**
   * The new identifier of the pinned message; 0 if there is no pinned message in the
   * chat
   */
  public pinnedMessageId: number
}
