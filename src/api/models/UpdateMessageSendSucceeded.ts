import { Message } from '../outputs'

/** A message has been successfully sent */
export class UpdateMessageSendSucceededBaseModel {
  public _: 'updateMessageSendSucceeded'
  /**
   * Information about the sent message. Usually only the message identifier, date, and
   * content are changed, but almost all other fields can also change
   */
  public message: Message
  /** The previous temporary message identifier */
  public oldMessageId: number
}
