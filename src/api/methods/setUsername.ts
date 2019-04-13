import { OkUnion } from '../outputs'

/**
 * Changes the username of the current user. If something changes, updateUser will be
 * sent
 * @param {Object} params
 * @param {string} [params.username] - The new value of the username. Use an empty
 * string to remove the username
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetUsernameMethod = <ResponseT = OkUnion>(
  params: SetUsernameParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetUsernameParams {
  /** The new value of the username. Use an empty string to remove the username */
  username?: string
}
