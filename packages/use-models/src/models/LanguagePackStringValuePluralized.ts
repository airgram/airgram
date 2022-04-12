/**
 * A language pack string which has different forms based on the number of some object
 * it mentions. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 * for more information
 */
export class LanguagePackStringValuePluralizedBaseModel {
  public _: 'languagePackStringValuePluralized'

  /** Value for zero objects */
  public zeroValue: string

  /** Value for one object */
  public oneValue: string

  /** Value for two objects */
  public twoValue: string

  /** Value for few objects */
  public fewValue: string

  /** Value for many objects */
  public manyValue: string

  /** Default value */
  public otherValue: string
}
