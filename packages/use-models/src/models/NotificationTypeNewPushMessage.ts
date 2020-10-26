import { PushMessageContentUnion } from '@airgram/core'

/** New message was received through a push notification */
export class NotificationTypeNewPushMessageBaseModel {
  public _: 'notificationTypeNewPushMessage'

  /**
   * The message identifier. The message will not be available in the chat history, but
   * the ID can be used in viewMessages, or as reply_to_message_id
   */
  public messageId: number

  /** Sender of the message; 0 if unknown. Corresponding user may be inaccessible */
  public senderUserId: number

  /** Sender chat of the message; 0 if none */
  public senderChatId: number

  /** Name of the sender; can be different from the name of the sender user */
  public senderName: string

  /** True, if the message is outgoing */
  public isOutgoing: boolean

  /** Push message content */
  public content: PushMessageContentUnion
}
