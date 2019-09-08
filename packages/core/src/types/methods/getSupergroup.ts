import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SupergroupUnion } from '../outputs'

export interface GetSupergroupParams {
  supergroupId?: number // Supergroup or channel identifier
}

/**
 * Returns information about a supergroup or channel by its identifier. This is an offline
 * request if the current user is not a bot
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup or channel identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetSupergroupParams, SupergroupUnion>>}
 */
export type getSupergroup<ExtensionT> = (
  params?: GetSupergroupParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetSupergroupParams, SupergroupUnion> & ExtensionT>
