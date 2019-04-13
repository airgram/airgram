/** Contains the type of a Telegram Passport element */
export type PassportElementTypeUnion = PassportElementTypePersonalDetails
  | PassportElementTypePassport
  | PassportElementTypeDriverLicense
  | PassportElementTypeIdentityCard
  | PassportElementTypeInternalPassport
  | PassportElementTypeAddress
  | PassportElementTypeUtilityBill
  | PassportElementTypeBankStatement
  | PassportElementTypeRentalAgreement
  | PassportElementTypePassportRegistration
  | PassportElementTypeTemporaryRegistration
  | PassportElementTypePhoneNumber
  | PassportElementTypeEmailAddress

/** A Telegram Passport element containing the user's personal details */
export interface PassportElementTypePersonalDetails {
  _: 'passportElementTypePersonalDetails'
}

/** A Telegram Passport element containing the user's passport */
export interface PassportElementTypePassport {
  _: 'passportElementTypePassport'
}

/** A Telegram Passport element containing the user's driver license */
export interface PassportElementTypeDriverLicense {
  _: 'passportElementTypeDriverLicense'
}

/** A Telegram Passport element containing the user's identity card */
export interface PassportElementTypeIdentityCard {
  _: 'passportElementTypeIdentityCard'
}

/** A Telegram Passport element containing the user's internal passport */
export interface PassportElementTypeInternalPassport {
  _: 'passportElementTypeInternalPassport'
}

/** A Telegram Passport element containing the user's address */
export interface PassportElementTypeAddress {
  _: 'passportElementTypeAddress'
}

/** A Telegram Passport element containing the user's utility bill */
export interface PassportElementTypeUtilityBill {
  _: 'passportElementTypeUtilityBill'
}

/** A Telegram Passport element containing the user's bank statement */
export interface PassportElementTypeBankStatement {
  _: 'passportElementTypeBankStatement'
}

/** A Telegram Passport element containing the user's rental agreement */
export interface PassportElementTypeRentalAgreement {
  _: 'passportElementTypeRentalAgreement'
}

/** A Telegram Passport element containing the registration page of the user's passport */
export interface PassportElementTypePassportRegistration {
  _: 'passportElementTypePassportRegistration'
}

/** A Telegram Passport element containing the user's temporary registration */
export interface PassportElementTypeTemporaryRegistration {
  _: 'passportElementTypeTemporaryRegistration'
}

/** A Telegram Passport element containing the user's phone number */
export interface PassportElementTypePhoneNumber {
  _: 'passportElementTypePhoneNumber'
}

/** A Telegram Passport element containing the user's email address */
export interface PassportElementTypeEmailAddress {
  _: 'passportElementTypeEmailAddress'
}
