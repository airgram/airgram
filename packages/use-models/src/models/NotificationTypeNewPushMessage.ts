import { PushMessageContentUnion } from '@airgram/core'

/** New message was received through a push notification */
export class NotificationTypeNewPushMessageBaseModel {
  public _: 'notificationTypeNewPushMessage'

  /**
   * The message identifier. The message will not be available in the chat history, but
   * the ID can be used in viewMessages and as reply_to_message_id
   */
  public messageId: number

  /** Sender of the message. Corresponding user may be inaccessible */
  public senderUserId: number

  /** Push message content */
  public content: PushMessageContentUnion
}
