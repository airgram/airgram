import { CountryInfo } from './index'

export type PhoneNumberInfoUnion = PhoneNumberInfo

/** Contains information about a phone number */
export interface PhoneNumberInfo {
  _: 'phoneNumberInfo'
  /** Information about the country to which the phone number belongs; may be null */
  country?: CountryInfo
  /** The part of the phone number denoting country calling code or its part */
  countryCallingCode: string
  /** The phone number without country calling code formatted accordingly to local rules */
  formattedPhoneNumber: string
}
