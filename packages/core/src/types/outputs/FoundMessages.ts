import { Message } from './index'

export type FoundMessagesUnion = FoundMessages

/** Contains a list of messages found by a search */
export interface FoundMessages {
  _: 'foundMessages'
  /** Approximate total number of messages found; -1 if unknown */
  totalCount: number
  /** List of messages */
  messages: Message[]
  /** The offset for the next request. If empty, there are no more results */
  nextOffset: string
}
