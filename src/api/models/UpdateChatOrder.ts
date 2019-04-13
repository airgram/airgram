/**
 * The order of the chat in the chats list has changed. Instead of this update updateChatLastMessage,
 * updateChatIsPinned or updateChatDraftMessage might be sent
 */
export class UpdateChatOrderBaseModel {
  public _: 'updateChatOrder'
  /** Chat identifier */
  public chatId: number
  /** New value of the order */
  public order: number | string
}
