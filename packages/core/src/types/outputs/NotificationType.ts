import { Message, PushMessageContentUnion } from './index'

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
   * the ID can be used in viewMessages and as reply_to_message_id
   */
  messageId: number
  /** Sender of the message. Corresponding user may be inaccessible */
  senderUserId: number
  /** Push message content */
  content: PushMessageContentUnion
}
