import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleSupergroupIsAllHistoryAvailableParams {
  supergroupId?: number // The identifier of the supergroup
  isAllHistoryAvailable?: boolean // The new value of is_all_history_available
}

/**
 * Toggles whether the message history of a supergroup is available to new members;
 * requires can_change_info rights
 * @param {Object} params
 * @param {number} [params.supergroupId] - The identifier of the supergroup
 * @param {boolean} [params.isAllHistoryAvailable] - The new value of is_all_history_available
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSupergroupIsAllHistoryAvailableParams, OkUnion>>}
 */
export type toggleSupergroupIsAllHistoryAvailable = (
  params?: ToggleSupergroupIsAllHistoryAvailableParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleSupergroupIsAllHistoryAvailableParams, OkUnion>>
