import { IdentityDocument } from '@airgram/core'

/** A Telegram Passport element containing the user's driver license */
export class PassportElementDriverLicenseBaseModel {
  public _: 'passportElementDriverLicense'

  /** Driver license */
  public driverLicense: IdentityDocument
}
