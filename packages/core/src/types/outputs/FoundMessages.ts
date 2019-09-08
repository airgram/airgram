import { Message } from './index'

export type FoundMessagesUnion = FoundMessages

/** Contains a list of messages found by a search */
export interface FoundMessages {
  _: 'foundMessages'
  /** List of messages */
  messages: Message[]
  /** Value to pass as from_search_id to get more results */
  nextFromSearchId: string
}
