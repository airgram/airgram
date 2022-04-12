/** The chat available reactions were changed */
export class UpdateChatAvailableReactionsBaseModel {
  public _: 'updateChatAvailableReactions'

  /** Chat identifier */
  public chatId: number

  /** The new list of reactions, available in the chat */
  public availableReactions: string[]
}
