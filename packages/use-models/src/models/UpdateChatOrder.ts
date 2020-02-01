/**
 * The order of the chat in the chat list has changed. Instead of this update updateChatLastMessage,
 * updateChatIsPinned, updateChatDraftMessage, or updateChatIsSponsored might be sent
 */
export class UpdateChatOrderBaseModel {
  public _: 'updateChatOrder'

  /** Chat identifier */
  public chatId: number

  /** New value of the order */
  public order: string
}
