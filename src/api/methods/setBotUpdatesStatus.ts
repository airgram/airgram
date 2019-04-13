import { OkUnion } from '../outputs'

/**
 * Informs the server about the number of pending bot updates if they haven't been processed
 * for a long time; for bots only
 * @param {Object} params
 * @param {number} [params.pendingUpdateCount] - The number of pending updates
 * @param {string} [params.errorMessage] - The last error message
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetBotUpdatesStatusMethod = <ResponseT = OkUnion>(
  params: SetBotUpdatesStatusParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetBotUpdatesStatusParams {
  /** The number of pending updates */
  pendingUpdateCount?: number
  /** The last error message */
  errorMessage?: string
}
