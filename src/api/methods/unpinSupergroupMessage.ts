import { OkUnion } from '../outputs'

/**
 * Removes the pinned message from a supergroup or channel; requires appropriate administrator
 * rights in the supergroup or channel
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {Object} state
 * @returns {OkUnion}
 */
export type UnpinSupergroupMessageMethod = <ResponseT = OkUnion>(
  params: UnpinSupergroupMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface UnpinSupergroupMessageParams {
  /** Identifier of the supergroup or channel */
  supergroupId?: number
}
