import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Edits the text of an inline text or game message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New text
 * content of the message. Should be of type InputMessageText
 * @param {Object} state
 * @returns {OkUnion}
 */
export type EditInlineMessageTextMethod = <ResponseT = OkUnion>(
  params: EditInlineMessageTextParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditInlineMessageTextParams {
  /** Inline message identifier */
  inlineMessageId?: string
  /** The new message reply markup */
  replyMarkup?: ReplyMarkupInputUnion
  /** New text content of the message. Should be of type InputMessageText */
  inputMessageContent?: InputMessageContentInputUnion
}
