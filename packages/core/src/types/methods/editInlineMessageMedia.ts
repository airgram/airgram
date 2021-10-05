import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface EditInlineMessageMediaParams {
  inlineMessageId?: string // Inline message identifier
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; pass null if none; for bots only
  inputMessageContent?: InputMessageContentInputUnion // New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo
}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video in an inline message sent via a bot; for bots only
 * @param {Object} params
 * @param {string} [params.inlineMessageId] - Inline message identifier
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * pass null if none; for bots only
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New content
 * of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio,
 * inputMessageDocument, inputMessagePhoto or inputMessageVideo
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditInlineMessageMediaParams, OkUnion>>}
 */
export type editInlineMessageMedia = (
  params?: EditInlineMessageMediaParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditInlineMessageMediaParams, OkUnion>>
