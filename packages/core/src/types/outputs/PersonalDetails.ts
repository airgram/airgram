import { Date } from './index'

export type PersonalDetailsUnion = PersonalDetails

/** Contains the user's personal details */
export interface PersonalDetails {
  _: 'personalDetails'
  /** First name of the user written in English; 1-255 characters */
  firstName: string
  /** Middle name of the user written in English; 0-255 characters */
  middleName: string
  /** Last name of the user written in English; 1-255 characters */
  lastName: string
  /** Native first name of the user; 1-255 characters */
  nativeFirstName: string
  /** Native middle name of the user; 0-255 characters */
  nativeMiddleName: string
  /** Native last name of the user; 1-255 characters */
  nativeLastName: string
  /** Birthdate of the user */
  birthdate: Date
  /** Gender of the user, "male" or "female" */
  gender: string
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's country */
  countryCode: string
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's residence country */
  residenceCountryCode: string
}
