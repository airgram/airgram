import { Message } from '../outputs'

/** Contains a list of messages found by a search */
export class FoundMessagesBaseModel {
  public _: 'foundMessages'
  /** List of messages */
  public messages: Message[]
  /** Value to pass as from_search_id to get more results */
  public nextFromSearchId: number | string
}
