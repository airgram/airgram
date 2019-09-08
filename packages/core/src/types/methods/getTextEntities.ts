import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextEntitiesUnion } from '../outputs'

export interface GetTextEntitiesParams {
  text?: string // The text in which to look for entites
}

/**
 * Returns all entities (mentions, hashtags, cashtags, bot commands, URLs, and email
 * addresses) contained in the text. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.text] - The text in which to look for entites
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetTextEntitiesParams, TextEntitiesUnion>>}
 */
export type getTextEntities<ExtensionT> = (
  params?: GetTextEntitiesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetTextEntitiesParams, TextEntitiesUnion> & ExtensionT>
