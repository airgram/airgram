import { InputIdentityDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's identity card */
export class InputPassportElementIdentityCardBaseModel {
  public _: 'inputPassportElementIdentityCard'
  /** The identity card to be saved */
  public identityCard: InputIdentityDocument
}
