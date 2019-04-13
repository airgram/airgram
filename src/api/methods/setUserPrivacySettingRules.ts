import {
  UserPrivacySettingInputUnion,
  UserPrivacySettingRulesInput
} from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Changes user privacy settings
 * @param {Object} params
 * @param {UserPrivacySettingInputUnion} [params.setting] - The privacy setting
 * @param {UserPrivacySettingRulesInput} [params.rules] - The new privacy rules
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetUserPrivacySettingRulesMethod = <ResponseT = OkUnion>(
  params: SetUserPrivacySettingRulesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetUserPrivacySettingRulesParams {
  /** The privacy setting */
  setting?: UserPrivacySettingInputUnion
  /** The new privacy rules */
  rules?: UserPrivacySettingRulesInput
}
