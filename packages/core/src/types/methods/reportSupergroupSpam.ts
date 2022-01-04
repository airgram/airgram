import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ReportSupergroupSpamParams {
  supergroupId?: number // Supergroup identifier
  messageIds?: number[] // Identifiers of messages to report
}

/**
 * Reports messages in a supergroup as spam; requires administrator rights in the supergroup
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup identifier
 * @param {number[]} [params.messageIds] - Identifiers of messages to report
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReportSupergroupSpamParams, OkUnion>>}
 */
export type reportSupergroupSpam = (
  params?: ReportSupergroupSpamParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReportSupergroupSpamParams, OkUnion>>
