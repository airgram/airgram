/** The message pinned state was changed */
export class UpdateMessageIsPinnedBaseModel {
  public _: 'updateMessageIsPinned'

  /** Chat identifier */
  public chatId: number

  /** The message identifier */
  public messageId: number

  /** True, if the message is pinned */
  public isPinned: boolean
}
