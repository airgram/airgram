import { IdentityDocument } from '@airgram/core'

/** A Telegram Passport element containing the user's identity card */
export class PassportElementIdentityCardBaseModel {
  public _: 'passportElementIdentityCard'

  /** Identity card */
  public identityCard: IdentityDocument
}
