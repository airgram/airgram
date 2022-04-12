export type ChatsUnion = Chats

/** Represents a list of chats */
export interface Chats {
  _: 'chats'
  /** Approximate total number of chats found */
  totalCount: number
  /** List of chat identifiers */
  chatIds: number[]
}
