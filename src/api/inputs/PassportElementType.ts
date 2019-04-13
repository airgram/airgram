/** Contains the type of a Telegram Passport element */
export type PassportElementTypeInputUnion = PassportElementTypePersonalDetailsInput
  | PassportElementTypePassportInput
  | PassportElementTypeDriverLicenseInput
  | PassportElementTypeIdentityCardInput
  | PassportElementTypeInternalPassportInput
  | PassportElementTypeAddressInput
  | PassportElementTypeUtilityBillInput
  | PassportElementTypeBankStatementInput
  | PassportElementTypeRentalAgreementInput
  | PassportElementTypePassportRegistrationInput
  | PassportElementTypeTemporaryRegistrationInput
  | PassportElementTypePhoneNumberInput
  | PassportElementTypeEmailAddressInput

/** A Telegram Passport element containing the user's personal details */
export interface PassportElementTypePersonalDetailsInput {
  _: 'passportElementTypePersonalDetails'
}

/** A Telegram Passport element containing the user's passport */
export interface PassportElementTypePassportInput {
  _: 'passportElementTypePassport'
}

/** A Telegram Passport element containing the user's driver license */
export interface PassportElementTypeDriverLicenseInput {
  _: 'passportElementTypeDriverLicense'
}

/** A Telegram Passport element containing the user's identity card */
export interface PassportElementTypeIdentityCardInput {
  _: 'passportElementTypeIdentityCard'
}

/** A Telegram Passport element containing the user's internal passport */
export interface PassportElementTypeInternalPassportInput {
  _: 'passportElementTypeInternalPassport'
}

/** A Telegram Passport element containing the user's address */
export interface PassportElementTypeAddressInput {
  _: 'passportElementTypeAddress'
}

/** A Telegram Passport element containing the user's utility bill */
export interface PassportElementTypeUtilityBillInput {
  _: 'passportElementTypeUtilityBill'
}

/** A Telegram Passport element containing the user's bank statement */
export interface PassportElementTypeBankStatementInput {
  _: 'passportElementTypeBankStatement'
}

/** A Telegram Passport element containing the user's rental agreement */
export interface PassportElementTypeRentalAgreementInput {
  _: 'passportElementTypeRentalAgreement'
}

/** A Telegram Passport element containing the registration page of the user's passport */
export interface PassportElementTypePassportRegistrationInput {
  _: 'passportElementTypePassportRegistration'
}

/** A Telegram Passport element containing the user's temporary registration */
export interface PassportElementTypeTemporaryRegistrationInput {
  _: 'passportElementTypeTemporaryRegistration'
}

/** A Telegram Passport element containing the user's phone number */
export interface PassportElementTypePhoneNumberInput {
  _: 'passportElementTypePhoneNumber'
}

/** A Telegram Passport element containing the user's email address */
export interface PassportElementTypeEmailAddressInput {
  _: 'passportElementTypeEmailAddress'
}
