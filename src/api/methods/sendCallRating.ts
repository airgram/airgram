import { OkUnion } from '../outputs'

/**
 * Sends a call rating
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {number} [params.rating] - Call rating; 1-5
 * @param {string} [params.comment] - An optional user comment if the rating is less
 * than 5
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SendCallRatingMethod = <ResponseT = OkUnion>(
  params: SendCallRatingParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendCallRatingParams {
  /** Call identifier */
  callId?: number
  /** Call rating; 1-5 */
  rating?: number
  /** An optional user comment if the rating is less than 5 */
  comment?: string
}
