import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ReportSupergroupSpamParams {
  supergroupId?: number // Supergroup identifier
  userId?: number // User identifier
  messageIds?: number[] // Identifiers of messages sent in the supergroup by the user. This list must be non-empty
}

/**
 * Reports some messages from a user in a supergroup as spam; requires administrator
 * rights in the supergroup
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup identifier
 * @param {number} [params.userId] - User identifier
 * @param {number[]} [params.messageIds] - Identifiers of messages sent in the supergroup
 * by the user. This list must be non-empty
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReportSupergroupSpamParams, OkUnion>>}
 */
export type reportSupergroupSpam = (
  params?: ReportSupergroupSpamParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReportSupergroupSpamParams, OkUnion>>
