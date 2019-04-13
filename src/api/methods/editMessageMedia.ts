import { InputMessageContentInputUnion, ReplyMarkupInputUnion } from '../inputs'
import { MessageUnion } from '../outputs'

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
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type EditMessageMediaMethod = <ResponseT = MessageUnion>(
  params: EditMessageMediaParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditMessageMediaParams {
  /** The chat the message belongs to */
  chatId?: number
  /** Identifier of the message */
  messageId?: number
  /** The new message reply markup; for bots only */
  replyMarkup?: ReplyMarkupInputUnion
  /**
   * New content of the message. Must be one of the following types: InputMessageAnimation,
   * InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
   */
  inputMessageContent?: InputMessageContentInputUnion
}
