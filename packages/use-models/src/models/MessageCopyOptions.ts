import { FormattedText } from '@airgram/core'

/**
 * Options to be used when a message content is copied without a link to the original
 * message
 */
export class MessageCopyOptionsBaseModel {
  public _: 'messageCopyOptions'

  /**
   * True, if content of the message needs to be copied without a link to the original
   * message. Always true if the message is forwarded to a secret chat
   */
  public sendCopy: boolean

  /**
   * True, if media caption of the message copy needs to be replaced. Ignored if send_copy
   * is false
   */
  public replaceCaption: boolean

  /** New message caption. Ignored if replace_caption is false */
  public newCaption: FormattedText
}
