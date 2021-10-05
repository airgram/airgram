/** Instructs application to force a reply to this message */
export class ReplyMarkupForceReplyBaseModel {
  public _: 'replyMarkupForceReply'

  /**
   * True, if a forced reply must automatically be shown to the current user. For outgoing
   * messages, specify true to show the forced reply only for the mentioned users and
   * for the target user of a reply
   */
  public isPersonal: boolean

  /**
   * If non-empty, the placeholder to be shown in the input field when the reply is active;
   * 0-64 characters
   */
  public inputFieldPlaceholder: string
}
