import { PersonalDetails } from '@airgram/core'

/** A Telegram Passport element containing the user's personal details */
export class PassportElementPersonalDetailsBaseModel {
  public _: 'passportElementPersonalDetails'

  /** Personal details of the user */
  public personalDetails: PersonalDetails
}
