import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocalizationTargetInfoUnion } from '../outputs'

export interface GetLocalizationTargetInfoParams {
  onlyLocal?: boolean // If true, returns only locally available information without sending network requests
}

/**
 * Returns information about the current localization target. This is an offline request
 * if only_local is true. Can be called before authorization
 * @param {Object} params
 * @param {boolean} [params.onlyLocal] - If true, returns only locally available
 * information without sending network requests
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetLocalizationTargetInfoParams, LocalizationTargetInfoUnion>>}
 */
export type getLocalizationTargetInfo = (
  params?: GetLocalizationTargetInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetLocalizationTargetInfoParams, LocalizationTargetInfoUnion>>
