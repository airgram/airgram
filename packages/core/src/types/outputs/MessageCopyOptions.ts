import { FormattedText } from './index'

export type MessageCopyOptionsUnion = MessageCopyOptions

/**
 * Options to be used when a message content is copied without reference to the original
 * sender. Service messages and messageInvoice can't be copied
 */
export interface MessageCopyOptions {
  _: 'messageCopyOptions'
  /**
   * True, if content of the message needs to be copied without reference to the original
   * sender. Always true if the message is forwarded to a secret chat or is local
   */
  sendCopy: boolean
  /**
   * True, if media caption of the message copy needs to be replaced. Ignored if send_copy
   * is false
   */
  replaceCaption: boolean
  /**
   * New message caption; pass null to copy message without caption. Ignored if replace_caption
   * is false
   */
  newCaption: FormattedText
}
