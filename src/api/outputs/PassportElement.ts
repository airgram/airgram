import {
  Address,
  IdentityDocument,
  PersonalDetails,
  PersonalDocument
} from './index'

/** Contains information about a Telegram Passport element */
export type PassportElementUnion = PassportElementPersonalDetails
  | PassportElementPassport
  | PassportElementDriverLicense
  | PassportElementIdentityCard
  | PassportElementInternalPassport
  | PassportElementAddress
  | PassportElementUtilityBill
  | PassportElementBankStatement
  | PassportElementRentalAgreement
  | PassportElementPassportRegistration
  | PassportElementTemporaryRegistration
  | PassportElementPhoneNumber
  | PassportElementEmailAddress

/** A Telegram Passport element containing the user's personal details */
export interface PassportElementPersonalDetails {
  _: 'passportElementPersonalDetails'
  /** Personal details of the user */
  personalDetails: PersonalDetails
}

/** A Telegram Passport element containing the user's passport */
export interface PassportElementPassport {
  _: 'passportElementPassport'
  /** Passport */
  passport: IdentityDocument
}

/** A Telegram Passport element containing the user's driver license */
export interface PassportElementDriverLicense {
  _: 'passportElementDriverLicense'
  /** Driver license */
  driverLicense: IdentityDocument
}

/** A Telegram Passport element containing the user's identity card */
export interface PassportElementIdentityCard {
  _: 'passportElementIdentityCard'
  /** Identity card */
  identityCard: IdentityDocument
}

/** A Telegram Passport element containing the user's internal passport */
export interface PassportElementInternalPassport {
  _: 'passportElementInternalPassport'
  /** Internal passport */
  internalPassport: IdentityDocument
}

/** A Telegram Passport element containing the user's address */
export interface PassportElementAddress {
  _: 'passportElementAddress'
  /** Address */
  address: Address
}

/** A Telegram Passport element containing the user's utility bill */
export interface PassportElementUtilityBill {
  _: 'passportElementUtilityBill'
  /** Utility bill */
  utilityBill: PersonalDocument
}

/** A Telegram Passport element containing the user's bank statement */
export interface PassportElementBankStatement {
  _: 'passportElementBankStatement'
  /** Bank statement */
  bankStatement: PersonalDocument
}

/** A Telegram Passport element containing the user's rental agreement */
export interface PassportElementRentalAgreement {
  _: 'passportElementRentalAgreement'
  /** Rental agreement */
  rentalAgreement: PersonalDocument
}

/** A Telegram Passport element containing the user's passport registration pages */
export interface PassportElementPassportRegistration {
  _: 'passportElementPassportRegistration'
  /** Passport registration pages */
  passportRegistration: PersonalDocument
}

/** A Telegram Passport element containing the user's temporary registration */
export interface PassportElementTemporaryRegistration {
  _: 'passportElementTemporaryRegistration'
  /** Temporary registration */
  temporaryRegistration: PersonalDocument
}

/** A Telegram Passport element containing the user's phone number */
export interface PassportElementPhoneNumber {
  _: 'passportElementPhoneNumber'
  /** Phone number */
  phoneNumber: string
}

/** A Telegram Passport element containing the user's email address */
export interface PassportElementEmailAddress {
  _: 'passportElementEmailAddress'
  /** Email address */
  emailAddress: string
}
