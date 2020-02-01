import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UsersUnion } from '../outputs'

export interface GetPollVotersParams {
  chatId?: number // Identifier of the chat to which the poll belongs
  messageId?: number // Identifier of the message containing the poll
  optionId?: number // 0-based identifier of the answer option
  offset?: number // Number of users to skip in the result; must be non-negative
  limit?: number // The maximum number of users to be returned; must be positive and can't be greater than 50. Fewer users may be returned than specified by the limit, even if the end of the voter list has not been reached
}

/**
 * Returns users voted for the specified option in a non-anonymous polls. For the optimal
 * performance the number of returned users is chosen by the library
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the poll belongs
 * @param {number} [params.messageId] - Identifier of the message containing the
 * poll
 * @param {number} [params.optionId] - 0-based identifier of the answer option
 * @param {number} [params.offset] - Number of users to skip in the result; must
 * be non-negative
 * @param {number} [params.limit] - The maximum number of users to be returned; must
 * be positive and can't be greater than 50. Fewer users may be returned than specified
 * by the limit, even if the end of the voter list has not been reached
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPollVotersParams, UsersUnion>>}
 */
export type getPollVoters = (
  params?: GetPollVotersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPollVotersParams, UsersUnion>>
