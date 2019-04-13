import { Message } from '../outputs'

/** A new message was received; can also be an outgoing message */
export class UpdateNewMessageBaseModel {
  public _: 'updateNewMessage'
  /** The new message */
  public message: Message
  /** True, if this message must not generate a notification */
  public disableNotification: boolean
  /** True, if the message contains a mention of the current user */
  public containsMention: boolean
}
