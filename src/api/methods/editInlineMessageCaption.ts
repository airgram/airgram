import { FormattedTextInput, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Edits the caption of an inline message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {FormattedTextInput} [params.caption] - New message content caption; 0-GetOption("message_caption_length_max")
 * characters
 * @param {Object} state
 * @returns {OkUnion}
 */
export type EditInlineMessageCaptionMethod = <ResponseT = OkUnion>(
  params: EditInlineMessageCaptionParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditInlineMessageCaptionParams {
  /** Inline message identifier */
  inlineMessageId?: string
  /** The new message reply markup */
  replyMarkup?: ReplyMarkupInputUnion
  /** New message content caption; 0-GetOption("message_caption_length_max") characters */
  caption?: FormattedTextInput
}
