/** A chat was pinned or unpinned */
export class UpdateChatIsPinnedBaseModel {
  public _: 'updateChatIsPinned'
  /** Chat identifier */
  public chatId: number
  /** New value of is_pinned */
  public isPinned: boolean
  /** New value of the chat order */
  public order: number | string
}
