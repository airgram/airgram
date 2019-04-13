import { UserPrivacySettingInputUnion } from '../inputs'
import { UserPrivacySettingRulesUnion } from '../outputs'

/**
 * Returns the current privacy settings
 * @param {Object} params
 * @param {UserPrivacySettingInputUnion} [params.setting] - The privacy setting
 * @param {Object} state
 * @returns {UserPrivacySettingRulesUnion}
 */
export type GetUserPrivacySettingRulesMethod = <ResponseT = UserPrivacySettingRulesUnion>(
  params: GetUserPrivacySettingRulesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetUserPrivacySettingRulesParams {
  /** The privacy setting */
  setting?: UserPrivacySettingInputUnion
}
