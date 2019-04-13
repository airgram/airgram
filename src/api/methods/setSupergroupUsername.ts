import { OkUnion } from '../outputs'

/**
 * Changes the username of a supergroup or channel, requires creator privileges in the
 * supergroup or channel
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {string} [params.username] - New value of the username. Use an empty string
 * to remove the username
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetSupergroupUsernameMethod = <ResponseT = OkUnion>(
  params: SetSupergroupUsernameParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetSupergroupUsernameParams {
  /** Identifier of the supergroup or channel */
  supergroupId?: number
  /** New value of the username. Use an empty string to remove the username */
  username?: string
}
