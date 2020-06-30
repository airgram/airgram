import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatFilterInput } from '../inputs'
import { TextUnion } from '../outputs'

export interface GetChatFilterDefaultIconNameParams {
  filter?: ChatFilterInput // Chat filter
}

/**
 * Returns default icon name for a filter. This is an offline method. Can be called
 * before authorization. Can be called synchronously
 * @param {Object} params
 * @param {ChatFilterInput} [params.filter] - Chat filter
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatFilterDefaultIconNameParams, TextUnion>>}
 */
export type getChatFilterDefaultIconName = (
  params?: GetChatFilterDefaultIconNameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatFilterDefaultIconNameParams, TextUnion>>

export type getChatFilterDefaultIconNameSync = (params?: GetChatFilterDefaultIconNameParams) => TextUnion
