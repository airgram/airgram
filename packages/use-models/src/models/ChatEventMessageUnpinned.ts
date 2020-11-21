import { Message } from '@airgram/core'

/** A message was unpinned */
export class ChatEventMessageUnpinnedBaseModel {
  public _: 'chatEventMessageUnpinned'

  /** Unpinned message */
  public message: Message
}
