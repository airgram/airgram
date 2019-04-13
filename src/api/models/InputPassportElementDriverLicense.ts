import { InputIdentityDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's driver license */
export class InputPassportElementDriverLicenseBaseModel {
  public _: 'inputPassportElementDriverLicense'
  /** The driver license to be saved */
  public driverLicense: InputIdentityDocument
}
