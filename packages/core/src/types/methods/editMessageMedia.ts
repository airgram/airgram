import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

export interface EditMessageMediaParams {
  chatId?: number // The chat the message belongs to
  messageId?: number // Identifier of the message
  replyMarkup?: ReplyMarkupInputUnion // The new message reply markup; pass null if none; for bots only
  inputMessageContent?: InputMessageContentInputUnion // New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo
}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video, including message caption. If only the caption needs to be edited, use editMessageCaption
 * instead. The media can't be edited if the message was set to self-destruct or to
 * a self-destructing media. The type of message content in an album can't be changed
 * with exception of replacing a photo with a video or vice versa. Returns the edited
 * message after the edit is completed on the server side
 * @param {Object} params
 * @param {number} [params.chatId] - The chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
 * pass null if none; for bots only
 * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New content
 * of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio,
 * inputMessageDocument, inputMessagePhoto or inputMessageVideo
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditMessageMediaParams, MessageUnion>>}
 */
export type editMessageMedia = (
  params?: EditMessageMediaParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditMessageMediaParams, MessageUnion>>
