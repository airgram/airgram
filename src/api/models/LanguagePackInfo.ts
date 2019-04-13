/** Contains information about a language pack */
export class LanguagePackInfoBaseModel {
  public _: 'languagePackInfo'
  /** Unique language pack identifier */
  public id: string
  /** Language name */
  public name: string
  /** Name of the language in that language */
  public nativeName: string
  /** Total number of non-deleted strings from the language pack available locally */
  public localStringCount: number
}
