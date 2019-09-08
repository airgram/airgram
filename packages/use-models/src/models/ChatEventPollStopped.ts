import { Message } from '@airgram/core'

/** A poll in a message was stopped */
export class ChatEventPollStoppedBaseModel {
  public _: 'chatEventPollStopped'

  /** The message with the poll */
  public message: Message
}
