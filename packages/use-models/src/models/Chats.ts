/** Represents a list of chats */
export class ChatsBaseModel {
  public _: 'chats'

  /** Approximate total number of chats found */
  public totalCount: number

  /** List of chat identifiers */
  public chatIds: number[]
}
