import { PassportElementTypeUnion } from '../outputs'

/** Telegram Passport data has been sent */
export class MessagePassportDataSentBaseModel {
  public _: 'messagePassportDataSent'
  /** List of Telegram Passport element types sent */
  public types: PassportElementTypeUnion[]
}
