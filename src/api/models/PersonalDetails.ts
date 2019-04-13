import { Date } from '../outputs'

/** Contains the user's personal details */
export class PersonalDetailsBaseModel {
  public _: 'personalDetails'
  /** First name of the user written in English; 1-255 characters */
  public firstName: string
  /** Middle name of the user written in English; 0-255 characters */
  public middleName: string
  /** Last name of the user written in English; 1-255 characters */
  public lastName: string
  /** Native first name of the user; 1-255 characters */
  public nativeFirstName: string
  /** Native middle name of the user; 0-255 characters */
  public nativeMiddleName: string
  /** Native last name of the user; 1-255 characters */
  public nativeLastName: string
  /** Birthdate of the user */
  public birthdate: Date
  /** Gender of the user, "male" or "female" */
  public gender: string
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's country */
  public countryCode: string
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's residence country */
  public residenceCountryCode: string
}
