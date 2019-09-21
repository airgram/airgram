import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetBotUpdatesStatusParams {
  pendingUpdateCount?: number // The number of pending updates
  errorMessage?: string // The last error message
}

/**
 * Informs the server about the number of pending bot updates if they haven't been processed
 * for a long time; for bots only
 * @param {Object} params
 * @param {number} [params.pendingUpdateCount] - The number of pending updates
 * @param {string} [params.errorMessage] - The last error message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetBotUpdatesStatusParams, OkUnion>>}
 */
export type setBotUpdatesStatus = (
  params?: SetBotUpdatesStatusParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetBotUpdatesStatusParams, OkUnion>>
