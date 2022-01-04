import { Message } from '@airgram/core'

/** A message has been successfully sent */
export class UpdateMessageSendSucceededBaseModel {
  public _: 'updateMessageSendSucceeded'

  /**
   * The sent message. Usually only the message identifier, date, and content are changed,
   * but almost all other fields can also change
   */
  public message: Message

  /** The previous temporary message identifier */
  public oldMessageId: number
}
