import { Message, MessageSenderUnion, PushMessageContentUnion } from './index'

/** Contains detailed information about a notification */
export type NotificationTypeUnion = NotificationTypeNewMessage
  | NotificationTypeNewSecretChat
  | NotificationTypeNewCall
  | NotificationTypeNewPushMessage

/** New message was received */
export interface NotificationTypeNewMessage {
  _: 'notificationTypeNewMessage'
  /** The message */
  message: Message
}

/** New secret chat was created */
export interface NotificationTypeNewSecretChat {
  _: 'notificationTypeNewSecretChat'
}

/** New call was received */
export interface NotificationTypeNewCall {
  _: 'notificationTypeNewCall'
  /** Call identifier */
  callId: number
}

/** New message was received through a push notification */
export interface NotificationTypeNewPushMessage {
  _: 'notificationTypeNewPushMessage'
  /**
   * The message identifier. The message will not be available in the chat history, but
   * the ID can be used in viewMessages, or as reply_to_message_id
   */
  messageId: number
  /** The sender of the message. Corresponding user or chat may be inaccessible */
  sender: MessageSenderUnion
  /** Name of the sender */
  senderName: string
  /** True, if the message is outgoing */
  isOutgoing: boolean
  /** Push message content */
  content: PushMessageContentUnion
}
