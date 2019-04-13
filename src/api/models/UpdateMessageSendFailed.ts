import { Message } from '../outputs'

/**
 * A message failed to send. Be aware that some messages being sent can be irrecoverably
 * deleted, in which case updateDeleteMessages will be received instead of this update
 */
export class UpdateMessageSendFailedBaseModel {
  public _: 'updateMessageSendFailed'
  /** Contains information about the message that failed to send */
  public message: Message
  /** The previous temporary message identifier */
  public oldMessageId: number
  /** An error code */
  public errorCode: number
  /** Error message */
  public errorMessage: string
}
