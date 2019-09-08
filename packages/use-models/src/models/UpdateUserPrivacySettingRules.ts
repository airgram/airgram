import { UserPrivacySettingRules, UserPrivacySettingUnion } from '@airgram/core'

/** Some privacy setting rules have been changed */
export class UpdateUserPrivacySettingRulesBaseModel {
  public _: 'updateUserPrivacySettingRules'

  /** The privacy setting */
  public setting: UserPrivacySettingUnion

  /** New privacy rules */
  public rules: UserPrivacySettingRules
}
