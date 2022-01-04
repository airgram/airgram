/** Contains information about the sending state of the message */
export type MessageSendingStateUnion = MessageSendingStatePending
  | MessageSendingStateFailed

/** The message is being sent now, but has not yet been delivered to the server */
export interface MessageSendingStatePending {
  _: 'messageSendingStatePending'
}

/** The message failed to be sent */
export interface MessageSendingStateFailed {
  _: 'messageSendingStateFailed'
  /** An error code; 0 if unknown */
  errorCode: number
  /** Error message */
  errorMessage: string
  /** True, if the message can be re-sent */
  canRetry: boolean
  /** True, if the message can be re-sent only on behalf of a different sender */
  needAnotherSender: boolean
  /**
   * Time left before the message can be re-sent, in seconds. No update is sent when this
   * field changes
   */
  retryAfter: number
}
