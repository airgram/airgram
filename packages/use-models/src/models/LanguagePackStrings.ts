import { LanguagePackString } from '@airgram/core'

/** Contains a list of language pack strings */
export class LanguagePackStringsBaseModel {
  public _: 'languagePackStrings'

  /** A list of language pack strings */
  public strings: LanguagePackString[]
}
