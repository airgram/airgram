import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatEventLogFiltersInput } from '../inputs'
import { ChatEventsUnion } from '../outputs'

export interface GetChatEventLogParams {
  chatId?: number // Chat identifier
  query?: string // Search query by which to filter events
  fromEventId?: string // Identifier of an event from which to return results. Use 0 to get results from the latest events
  limit?: number // Maximum number of events to return; up to 100
  filters?: ChatEventLogFiltersInput // The types of events to return. By default, all types will be returned
  userIds?: number[] // User identifiers by which to filter events. By default, events relating to all users will be returned
}

/**
 * Returns a list of service actions taken by chat members and administrators in the
 * last 48 hours. Available only in supergroups and channels. Requires administrator
 * rights. Returns results in reverse chronological order (i. e., in order of decreasing
 * event_id)
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.query] - Search query by which to filter events
 * @param {string} [params.fromEventId] - Identifier of an event from which to return
 * results. Use 0 to get results from the latest events
 * @param {number} [params.limit] - Maximum number of events to return; up to 100
 * @param {ChatEventLogFiltersInput} [params.filters] - The types of events to return.
 * By default, all types will be returned
 * @param {number[]} [params.userIds] - User identifiers by which to filter events.
 * By default, events relating to all users will be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatEventLogParams, ChatEventsUnion>>}
 */
export type getChatEventLog = (
  params?: GetChatEventLogParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatEventLogParams, ChatEventsUnion>>
