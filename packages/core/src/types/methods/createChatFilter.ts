import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatFilterInput } from '../inputs'
import { ChatFilterInfoUnion } from '../outputs'

export interface CreateChatFilterParams {
  filter?: ChatFilterInput // Chat filter
}

/**
 * Creates new chat filter. Returns information about the created chat filter
 * @param {Object} params
 * @param {ChatFilterInput} [params.filter] - Chat filter
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateChatFilterParams, ChatFilterInfoUnion>>}
 */
export type createChatFilter = (
  params?: CreateChatFilterParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateChatFilterParams, ChatFilterInfoUnion>>
