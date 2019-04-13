import { InputPersonalDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's rental agreement */
export class InputPassportElementRentalAgreementBaseModel {
  public _: 'inputPassportElementRentalAgreement'
  /** The rental agreement to be saved */
  public rentalAgreement: InputPersonalDocument
}
