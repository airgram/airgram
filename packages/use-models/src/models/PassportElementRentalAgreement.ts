import { PersonalDocument } from '@airgram/core'

/** A Telegram Passport element containing the user's rental agreement */
export class PassportElementRentalAgreementBaseModel {
  public _: 'passportElementRentalAgreement'

  /** Rental agreement */
  public rentalAgreement: PersonalDocument
}
