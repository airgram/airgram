import { CountryInfo } from '@airgram/core'

/** Contains information about a phone number */
export class PhoneNumberInfoBaseModel {
  public _: 'phoneNumberInfo'

  /** Information about the country to which the phone number belongs; may be null */
  public country?: CountryInfo

  /** The part of the phone number denoting country calling code or its part */
  public countryCallingCode: string

  /** The phone number without country calling code formatted accordingly to local rules */
  public formattedPhoneNumber: string
}
