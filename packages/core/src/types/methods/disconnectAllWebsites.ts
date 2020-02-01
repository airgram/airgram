import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'



/**
 * Disconnects all websites from the current user's Telegram account
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type disconnectAllWebsites = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion>>
