import { PersonalDocument } from '../outputs'

/** A Telegram Passport element containing the user's passport registration pages */
export class PassportElementPassportRegistrationBaseModel {
  public _: 'passportElementPassportRegistration'
  /** Passport registration pages */
  public passportRegistration: PersonalDocument
}
