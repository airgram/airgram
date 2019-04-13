import { PersonalDetails } from '../outputs'

/** A Telegram Passport element to be saved containing the user's personal details */
export class InputPassportElementPersonalDetailsBaseModel {
  public _: 'inputPassportElementPersonalDetails'
  /** Personal details of the user */
  public personalDetails: PersonalDetails
}
