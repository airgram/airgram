/** Contains information about a language pack */
export class LanguagePackInfoBaseModel {
  public _: 'languagePackInfo'

  /** Unique language pack identifier */
  public id: string

  /**
   * Identifier of a base language pack; may be empty. If a string is missed in the language
   * pack, then it must be fetched from base language pack. Unsupported in custom language
   * packs
   */
  public baseLanguagePackId: string

  /** Language name */
  public name: string

  /** Name of the language in that language */
  public nativeName: string

  /**
   * A language code to be used to apply plural forms. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
   * for more information
   */
  public pluralCode: string

  /** True, if the language pack is official */
  public isOfficial: boolean

  /** True, if the language pack strings are RTL */
  public isRtl: boolean

  /** True, if the language pack is a beta language pack */
  public isBeta: boolean

  /** True, if the language pack is installed by the current user */
  public isInstalled: boolean

  /** Total number of non-deleted strings from the language pack */
  public totalStringCount: number

  /** Total number of translated strings from the language pack */
  public translatedStringCount: number

  /** Total number of non-deleted strings from the language pack available locally */
  public localStringCount: number

  /** Link to language translation interface; empty for custom local language packs */
  public translationUrl: string
}
