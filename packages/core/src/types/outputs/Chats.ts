export type ChatsUnion = Chats

/** Represents a list of chats */
export interface Chats {
  _: 'chats'
  /** List of chat identifiers */
  chatIds: number[]
}
