import { OkUnion } from '../outputs'

/**
 * Reports some messages from a user in a supergroup as spam; requires administrator
 * rights in the supergroup
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup identifier
 * @param {number} [params.userId] - User identifier
 * @param {number[]} [params.messageIds] - Identifiers of messages sent in the supergroup
 * by the user. This list must be non-empty
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ReportSupergroupSpamMethod = <ResponseT = OkUnion>(
  params: ReportSupergroupSpamParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ReportSupergroupSpamParams {
  /** Supergroup identifier */
  supergroupId?: number
  /** User identifier */
  userId?: number
  /** Identifiers of messages sent in the supergroup by the user. This list must be non-empty */
  messageIds?: number[]
}
