import { Message } from '@airgram/core'

/** A message was edited */
export class ChatEventMessageEditedBaseModel {
  public _: 'chatEventMessageEdited'

  /** The original message before the edit */
  public oldMessage: Message

  /** The message after it was edited */
  public newMessage: Message
}
