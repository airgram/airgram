import { Message } from '@airgram/core'

/** Contains a list of messages found by a search */
export class FoundMessagesBaseModel {
  public _: 'foundMessages'

  /** Approximate total count of messages found; -1 if unknown */
  public totalCount: number

  /** List of messages */
  public messages: Message[]

  /** The offset for the next request. If empty, there are no more results */
  public nextOffset: string
}
