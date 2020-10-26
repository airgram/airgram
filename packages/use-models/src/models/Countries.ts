import { CountryInfo } from '@airgram/core'

/** Contains information about countries */
export class CountriesBaseModel {
  public _: 'countries'

  /** The list of countries */
  public countries: CountryInfo[]
}
