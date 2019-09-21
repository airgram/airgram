import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UserPrivacySettingInputUnion } from '../inputs'
import { UserPrivacySettingRulesUnion } from '../outputs'

export interface GetUserPrivacySettingRulesParams {
  setting?: UserPrivacySettingInputUnion // The privacy setting
}

/**
 * Returns the current privacy settings
 * @param {Object} params
 * @param {UserPrivacySettingInputUnion} [params.setting] - The privacy setting
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetUserPrivacySettingRulesParams, UserPrivacySettingRulesUnion>>}
 */
export type getUserPrivacySettingRules = (
  params?: GetUserPrivacySettingRulesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetUserPrivacySettingRulesParams, UserPrivacySettingRulesUnion>>
