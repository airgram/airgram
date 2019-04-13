import { LocalizationTargetInfoUnion } from '../outputs'

/**
 * Returns information about the current localization target. This is an offline request
 * if only_local is true
 * @param {Object} params
 * @param {boolean} [params.onlyLocal] - If true, returns only locally available
 * information without sending network requests
 * @param {Object} state
 * @returns {LocalizationTargetInfoUnion}
 */
export type GetLocalizationTargetInfoMethod = <ResponseT = LocalizationTargetInfoUnion>(
  params: GetLocalizationTargetInfoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetLocalizationTargetInfoParams {
  /** If true, returns only locally available information without sending network requests */
  onlyLocal?: boolean
}
