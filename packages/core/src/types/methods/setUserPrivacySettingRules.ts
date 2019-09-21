import { ApiRequestOptions, ApiResponse } from '../airgram'
import {
  UserPrivacySettingInputUnion,
  UserPrivacySettingRulesInput
} from '../inputs'
import { OkUnion } from '../outputs'

export interface SetUserPrivacySettingRulesParams {
  setting?: UserPrivacySettingInputUnion // The privacy setting
  rules?: UserPrivacySettingRulesInput // The new privacy rules
}

/**
 * Changes user privacy settings
 * @param {Object} params
 * @param {UserPrivacySettingInputUnion} [params.setting] - The privacy setting
 * @param {UserPrivacySettingRulesInput} [params.rules] - The new privacy rules
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetUserPrivacySettingRulesParams, OkUnion>>}
 */
export type setUserPrivacySettingRules = (
  params?: SetUserPrivacySettingRulesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetUserPrivacySettingRulesParams, OkUnion>>
