/**
 * Instructs application to remove the keyboard once this message has been received.
 * This kind of keyboard can't be received in an incoming message; instead, UpdateChatReplyMarkup
 * with message_id == 0 will be sent
 */
export class ReplyMarkupRemoveKeyboardBaseModel {
  public _: 'replyMarkupRemoveKeyboard'

  /**
   * True, if the keyboard is removed only for the mentioned users or the target user
   * of a reply
   */
  public isPersonal: boolean
}
