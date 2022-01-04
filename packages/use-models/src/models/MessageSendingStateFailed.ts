/** The message failed to be sent */
export class MessageSendingStateFailedBaseModel {
  public _: 'messageSendingStateFailed'

  /** An error code; 0 if unknown */
  public errorCode: number

  /** Error message */
  public errorMessage: string

  /** True, if the message can be re-sent */
  public canRetry: boolean

  /** True, if the message can be re-sent only on behalf of a different sender */
  public needAnotherSender: boolean

  /**
   * Time left before the message can be re-sent, in seconds. No update is sent when this
   * field changes
   */
  public retryAfter: number
}
