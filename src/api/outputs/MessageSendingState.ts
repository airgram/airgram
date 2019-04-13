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
}
