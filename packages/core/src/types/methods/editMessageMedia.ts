import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

export interface EditMessageMediaParams {
  chatId?: number // The chat the message belongs to
  messageId?: number // Identifier of the message
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; for bots only
  inputMessageContent?: InputMessageContentInputUnion // New content of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video. The media in the message can't be replaced if the message was set to self-destruct.
 * Media can't be replaced by self-destructing media. Media in an album can be edited
 * only to contain a photo or a video. Returns the edited message after the edit is
 * completed on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * for bots only
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New content
 * of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio,
 * InputMessageDocument, InputMessagePhoto or InputMessageVideo
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageMediaParams, MessageUnion>>}
 */
export type editMessageMedia = (
  params?: EditMessageMediaParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditMessageMediaParams, MessageUnion>>
