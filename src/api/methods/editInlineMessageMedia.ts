import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video in an inline message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New content
 * of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio,
 * InputMessageDocument, InputMessagePhoto or InputMessageVideo
 * @param {Object} state
 * @returns {OkUnion}
 */
export type EditInlineMessageMediaMethod = <ResponseT = OkUnion>(
  params: EditInlineMessageMediaParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditInlineMessageMediaParams {
  /** Inline message identifier */
  inlineMessageId?: string
  /** The new message reply markup; for bots only */
  replyMarkup?: ReplyMarkupInputUnion
  /**
   * New content of the message. Must be one of the following types: InputMessageAnimation,
   * InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
   */
  inputMessageContent?: InputMessageContentInputUnion
}
