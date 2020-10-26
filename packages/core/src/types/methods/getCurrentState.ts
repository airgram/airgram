import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UpdatesUnion } from '../outputs'



/**
 * Returns all updates needed to restore current TDLib state, i.e. all actual UpdateAuthorizationState/UpdateUser/UpdateNewChat
 * and others. This is especially useful if TDLib is run in a separate process. Can
 * be called before initialization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, UpdatesUnion>>}
 */
export type getCurrentState = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, UpdatesUnion>>
