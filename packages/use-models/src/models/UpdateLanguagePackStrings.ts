import { LanguagePackString } from '@airgram/core'

/** Some language pack strings have been updated */
export class UpdateLanguagePackStringsBaseModel {
  public _: 'updateLanguagePackStrings'

  /** Localization target to which the language pack belongs */
  public localizationTarget: string

  /** Identifier of the updated language pack */
  public languagePackId: string

  /** List of changed language pack strings */
  public strings: LanguagePackString[]
}
