import { PersonalDocument } from '@airgram/core'

/** A Telegram Passport element containing the user's temporary registration */
export class PassportElementTemporaryRegistrationBaseModel {
  public _: 'passportElementTemporaryRegistration'

  /** Temporary registration */
  public temporaryRegistration: PersonalDocument
}
