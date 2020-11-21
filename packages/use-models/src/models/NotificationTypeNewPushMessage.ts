import { MessageSenderUnion, PushMessageContentUnion } from '@airgram/core'

/** New message was received through a push notification */
export class NotificationTypeNewPushMessageBaseModel {
  public _: 'notificationTypeNewPushMessage'

  /**
   * The message identifier. The message will not be available in the chat history, but
   * the ID can be used in viewMessages, or as reply_to_message_id
   */
  public messageId: number

  /** The sender of the message. Corresponding user or chat may be inaccessible */
  public sender: MessageSenderUnion

  /** Name of the sender */
  public senderName: string

  /** True, if the message is outgoing */
  public isOutgoing: boolean

  /** Push message content */
  public content: PushMessageContentUnion
}
