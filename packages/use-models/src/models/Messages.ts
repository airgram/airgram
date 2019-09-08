import { Message } from '@airgram/core'

/** Contains a list of messages */
export class MessagesBaseModel {
  public _: 'messages'

  /** Approximate total count of messages found */
  public totalCount: number

  /** List of messages; messages may be null */
  public messages?: Message[]
}
