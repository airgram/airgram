/** Represents a list of chats */
export class ChatsBaseModel {
  public _: 'chats'

  /** Approximate total count of chats found */
  public totalCount: number

  /** List of chat identifiers */
  public chatIds: number[]
}
