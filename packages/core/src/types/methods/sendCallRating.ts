import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CallProblemInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SendCallRatingParams {
  callId?: number // Call identifier
  rating?: number // Call rating; 1-5
  comment?: string // An optional user comment if the rating is less than 5
  problems?: CallProblemInputUnion[] // List of the exact types of problems with the call, specified by the user
}

/**
 * Sends a call rating
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {number} [params.rating] - Call rating; 1-5
 * @param {string} [params.comment] - An optional user comment if the rating is less
 * than 5
 * @param {CallProblemInputUnion[]} [params.problems] - List of the exact types of
 * problems with the call, specified by the user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendCallRatingParams, OkUnion>>}
 */
export type sendCallRating = (
  params?: SendCallRatingParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendCallRatingParams, OkUnion>>
