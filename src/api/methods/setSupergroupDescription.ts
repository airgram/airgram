import { OkUnion } from '../outputs'

/**
 * Changes information about a supergroup or channel; requires appropriate administrator
 * rights
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {string} [params.description] - New supergroup or channel description;
 * 0-255 characters
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetSupergroupDescriptionMethod = <ResponseT = OkUnion>(
  params: SetSupergroupDescriptionParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetSupergroupDescriptionParams {
  /** Identifier of the supergroup or channel */
  supergroupId?: number
  /** New supergroup or channel description; 0-255 characters */
  description?: string
}
