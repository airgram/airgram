import { PersonalDocument } from '@airgram/core'

/** A Telegram Passport element containing the user's utility bill */
export class PassportElementUtilityBillBaseModel {
  public _: 'passportElementUtilityBill'

  /** Utility bill */
  public utilityBill: PersonalDocument
}
