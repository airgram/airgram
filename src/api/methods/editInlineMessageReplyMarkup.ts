import { ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Edits the reply markup of an inline message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
 * @param {Object} state
 * @returns {OkUnion}
 */
export type EditInlineMessageReplyMarkupMethod = <ResponseT = OkUnion>(
  params: EditInlineMessageReplyMarkupParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditInlineMessageReplyMarkupParams {
  /** Inline message identifier */
  inlineMessageId?: string
  /** The new message reply markup */
  replyMarkup?: ReplyMarkupInputUnion
}
