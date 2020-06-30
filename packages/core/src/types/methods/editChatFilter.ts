import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatFilterInput } from '../inputs'
import { ChatFilterInfoUnion } from '../outputs'

export interface EditChatFilterParams {
  chatFilterId?: number // Chat filter identifier
  filter?: ChatFilterInput // The edited chat filter
}

/**
 * Edits existing chat filter. Returns information about the edited chat filter
 * @param {Object} params
 * @param {number} [params.chatFilterId] - Chat filter identifier
 * @param {ChatFilterInput} [params.filter] - The edited chat filter
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditChatFilterParams, ChatFilterInfoUnion>>}
 */
export type editChatFilter = (
  params?: EditChatFilterParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditChatFilterParams, ChatFilterInfoUnion>>
