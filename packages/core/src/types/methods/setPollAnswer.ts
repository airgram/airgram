import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetPollAnswerParams {
  chatId?: number // Identifier of the chat to which the poll belongs
  messageId?: number // Identifier of the message containing the poll
  optionIds?: number[] // 0-based identifiers of options, chosen by the user. Currently user can't choose more than 1 option
}

/**
 * Changes user answer to a poll
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the poll belongs
 * @param {number} [params.messageId] - Identifier of the message containing the
 * poll
 * @param {number[]} [params.optionIds] - 0-based identifiers of options, chosen
 * by the user. Currently user can't choose more than 1 option
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetPollAnswerParams, OkUnion>>}
 */
export type setPollAnswer = (
  params?: SetPollAnswerParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetPollAnswerParams, OkUnion>>
