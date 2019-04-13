import { InputPersonalDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's utility bill */
export class InputPassportElementUtilityBillBaseModel {
  public _: 'inputPassportElementUtilityBill'
  /** The utility bill to be saved */
  public utilityBill: InputPersonalDocument
}
