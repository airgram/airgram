/** Contains information about a country */
export class CountryInfoBaseModel {
  public _: 'countryInfo'

  /** A two-letter ISO 3166-1 alpha-2 country code */
  public countryCode: string

  /** Native name of the country */
  public name: string

  /** English name of the country */
  public englishName: string

  /** True, if the country must be hidden from the list of all countries */
  public isHidden: boolean

  /** List of country calling codes */
  public callingCodes: string[]
}
