import {
  Address,
  InputIdentityDocument,
  InputPersonalDocument,
  PersonalDetails
} from './index'

/** Contains information about a Telegram Passport element to be saved */
export type InputPassportElementUnion = InputPassportElementPersonalDetails
  | InputPassportElementPassport
  | InputPassportElementDriverLicense
  | InputPassportElementIdentityCard
  | InputPassportElementInternalPassport
  | InputPassportElementAddress
  | InputPassportElementUtilityBill
  | InputPassportElementBankStatement
  | InputPassportElementRentalAgreement
  | InputPassportElementPassportRegistration
  | InputPassportElementTemporaryRegistration
  | InputPassportElementPhoneNumber
  | InputPassportElementEmailAddress

/** A Telegram Passport element to be saved containing the user's personal details */
export interface InputPassportElementPersonalDetails {
  _: 'inputPassportElementPersonalDetails'
  /** Personal details of the user */
  personalDetails: PersonalDetails
}

/** A Telegram Passport element to be saved containing the user's passport */
export interface InputPassportElementPassport {
  _: 'inputPassportElementPassport'
  /** The passport to be saved */
  passport: InputIdentityDocument
}

/** A Telegram Passport element to be saved containing the user's driver license */
export interface InputPassportElementDriverLicense {
  _: 'inputPassportElementDriverLicense'
  /** The driver license to be saved */
  driverLicense: InputIdentityDocument
}

/** A Telegram Passport element to be saved containing the user's identity card */
export interface InputPassportElementIdentityCard {
  _: 'inputPassportElementIdentityCard'
  /** The identity card to be saved */
  identityCard: InputIdentityDocument
}

/** A Telegram Passport element to be saved containing the user's internal passport */
export interface InputPassportElementInternalPassport {
  _: 'inputPassportElementInternalPassport'
  /** The internal passport to be saved */
  internalPassport: InputIdentityDocument
}

/** A Telegram Passport element to be saved containing the user's address */
export interface InputPassportElementAddress {
  _: 'inputPassportElementAddress'
  /** The address to be saved */
  address: Address
}

/** A Telegram Passport element to be saved containing the user's utility bill */
export interface InputPassportElementUtilityBill {
  _: 'inputPassportElementUtilityBill'
  /** The utility bill to be saved */
  utilityBill: InputPersonalDocument
}

/** A Telegram Passport element to be saved containing the user's bank statement */
export interface InputPassportElementBankStatement {
  _: 'inputPassportElementBankStatement'
  /** The bank statement to be saved */
  bankStatement: InputPersonalDocument
}

/** A Telegram Passport element to be saved containing the user's rental agreement */
export interface InputPassportElementRentalAgreement {
  _: 'inputPassportElementRentalAgreement'
  /** The rental agreement to be saved */
  rentalAgreement: InputPersonalDocument
}

/** A Telegram Passport element to be saved containing the user's passport registration */
export interface InputPassportElementPassportRegistration {
  _: 'inputPassportElementPassportRegistration'
  /** The passport registration page to be saved */
  passportRegistration: InputPersonalDocument
}

/** A Telegram Passport element to be saved containing the user's temporary registration */
export interface InputPassportElementTemporaryRegistration {
  _: 'inputPassportElementTemporaryRegistration'
  /** The temporary registration document to be saved */
  temporaryRegistration: InputPersonalDocument
}

/** A Telegram Passport element to be saved containing the user's phone number */
export interface InputPassportElementPhoneNumber {
  _: 'inputPassportElementPhoneNumber'
  /** The phone number to be saved */
  phoneNumber: string
}

/** A Telegram Passport element to be saved containing the user's email address */
export interface InputPassportElementEmailAddress {
  _: 'inputPassportElementEmailAddress'
  /** The email address to be saved */
  emailAddress: string
}
