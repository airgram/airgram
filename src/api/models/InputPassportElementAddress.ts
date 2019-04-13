import { Address } from '../outputs'

/** A Telegram Passport element to be saved containing the user's address */
export class InputPassportElementAddressBaseModel {
  public _: 'inputPassportElementAddress'
  /** The address to be saved */
  public address: Address
}
