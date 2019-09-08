import { IdentityDocument } from '@airgram/core'

/** A Telegram Passport element containing the user's passport */
export class PassportElementPassportBaseModel {
  public _: 'passportElementPassport'

  /** Passport */
  public passport: IdentityDocument
}
