/** A chat was blocked or unblocked */
export class UpdateChatIsBlockedBaseModel {
  public _: 'updateChatIsBlocked'

  /** Chat identifier */
  public chatId: number

  /** New value of is_blocked */
  public isBlocked: boolean
}
