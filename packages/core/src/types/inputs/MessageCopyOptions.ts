import { FormattedTextInput } from './index'

export type MessageCopyOptionsInputUnion = MessageCopyOptionsInput

/**
 * Options to be used when a message content is copied without a link to the original
 * message
 */
export interface MessageCopyOptionsInput {
  _: 'messageCopyOptions'
  /**
   * True, if content of the message needs to be copied without a link to the original
   * message. Always true if the message is forwarded to a secret chat
   */
  sendCopy?: boolean
  /**
   * True, if media caption of the message copy needs to be replaced. Ignored if send_copy
   * is false
   */
  replaceCaption?: boolean
  /** New message caption. Ignored if replace_caption is false */
  newCaption?: FormattedTextInput
}
