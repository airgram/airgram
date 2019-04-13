import {
  AddressInput,
  InputIdentityDocumentInput,
  InputPersonalDocumentInput,
  PersonalDetailsInput
} from './index'

/** Contains information about a Telegram Passport element to be saved */
export type InputPassportElementInputUnion = InputPassportElementPersonalDetailsInput
  | InputPassportElementPassportInput
  | InputPassportElementDriverLicenseInput
  | InputPassportElementIdentityCardInput
  | InputPassportElementInternalPassportInput
  | InputPassportElementAddressInput
  | InputPassportElementUtilityBillInput
  | InputPassportElementBankStatementInput
  | InputPassportElementRentalAgreementInput
  | InputPassportElementPassportRegistrationInput
  | InputPassportElementTemporaryRegistrationInput
  | InputPassportElementPhoneNumberInput
  | InputPassportElementEmailAddressInput

/** A Telegram Passport element to be saved containing the user's personal details */
export interface InputPassportElementPersonalDetailsInput {
  _: 'inputPassportElementPersonalDetails'
  /** Personal details of the user */
  personalDetails?: PersonalDetailsInput
}

/** A Telegram Passport element to be saved containing the user's passport */
export interface InputPassportElementPassportInput {
  _: 'inputPassportElementPassport'
  /** The passport to be saved */
  passport?: InputIdentityDocumentInput
}

/** A Telegram Passport element to be saved containing the user's driver license */
export interface InputPassportElementDriverLicenseInput {
  _: 'inputPassportElementDriverLicense'
  /** The driver license to be saved */
  driverLicense?: InputIdentityDocumentInput
}

/** A Telegram Passport element to be saved containing the user's identity card */
export interface InputPassportElementIdentityCardInput {
  _: 'inputPassportElementIdentityCard'
  /** The identity card to be saved */
  identityCard?: InputIdentityDocumentInput
}

/** A Telegram Passport element to be saved containing the user's internal passport */
export interface InputPassportElementInternalPassportInput {
  _: 'inputPassportElementInternalPassport'
  /** The internal passport to be saved */
  internalPassport?: InputIdentityDocumentInput
}

/** A Telegram Passport element to be saved containing the user's address */
export interface InputPassportElementAddressInput {
  _: 'inputPassportElementAddress'
  /** The address to be saved */
  address?: AddressInput
}

/** A Telegram Passport element to be saved containing the user's utility bill */
export interface InputPassportElementUtilityBillInput {
  _: 'inputPassportElementUtilityBill'
  /** The utility bill to be saved */
  utilityBill?: InputPersonalDocumentInput
}

/** A Telegram Passport element to be saved containing the user's bank statement */
export interface InputPassportElementBankStatementInput {
  _: 'inputPassportElementBankStatement'
  /** The bank statement to be saved */
  bankStatement?: InputPersonalDocumentInput
}

/** A Telegram Passport element to be saved containing the user's rental agreement */
export interface InputPassportElementRentalAgreementInput {
  _: 'inputPassportElementRentalAgreement'
  /** The rental agreement to be saved */
  rentalAgreement?: InputPersonalDocumentInput
}

/** A Telegram Passport element to be saved containing the user's passport registration */
export interface InputPassportElementPassportRegistrationInput {
  _: 'inputPassportElementPassportRegistration'
  /** The passport registration page to be saved */
  passportRegistration?: InputPersonalDocumentInput
}

/** A Telegram Passport element to be saved containing the user's temporary registration */
export interface InputPassportElementTemporaryRegistrationInput {
  _: 'inputPassportElementTemporaryRegistration'
  /** The temporary registration document to be saved */
  temporaryRegistration?: InputPersonalDocumentInput
}

/** A Telegram Passport element to be saved containing the user's phone number */
export interface InputPassportElementPhoneNumberInput {
  _: 'inputPassportElementPhoneNumber'
  /** The phone number to be saved */
  phoneNumber?: string
}

/** A Telegram Passport element to be saved containing the user's email address */
export interface InputPassportElementEmailAddressInput {
  _: 'inputPassportElementEmailAddress'
  /** The email address to be saved */
  emailAddress?: string
}
