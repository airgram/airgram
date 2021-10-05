export type CountryInfoUnion = CountryInfo

/** Contains information about a country */
export interface CountryInfo {
  _: 'countryInfo'
  /** A two-letter ISO 3166-1 alpha-2 country code */
  countryCode: string
  /** Native name of the country */
  name: string
  /** English name of the country */
  englishName: string
  /** True, if the country must be hidden from the list of all countries */
  isHidden: boolean
  /** List of country calling codes */
  callingCodes: string[]
}
