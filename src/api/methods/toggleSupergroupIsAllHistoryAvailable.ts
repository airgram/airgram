import { OkUnion } from '../outputs'

/**
 * Toggles whether the message history of a supergroup is available to new members;
 * requires appropriate administrator rights in the supergroup.
 * @param {Object} params
 * @param {number} [params.supergroupId] - The identifier of the supergroup
 * @param {boolean} [params.isAllHistoryAvailable] - The new value of is_all_history_available
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ToggleSupergroupIsAllHistoryAvailableMethod = <ResponseT = OkUnion>(
  params: ToggleSupergroupIsAllHistoryAvailableParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ToggleSupergroupIsAllHistoryAvailableParams {
  /** The identifier of the supergroup */
  supergroupId?: number
  /** The new value of is_all_history_available */
  isAllHistoryAvailable?: boolean
}
