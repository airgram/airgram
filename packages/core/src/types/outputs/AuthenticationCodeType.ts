/**
 * Provides information about the method by which an authentication code is delivered
 * to the user
 */
export type AuthenticationCodeTypeUnion = AuthenticationCodeTypeTelegramMessage
  | AuthenticationCodeTypeSms
  | AuthenticationCodeTypeCall
  | AuthenticationCodeTypeFlashCall
  | AuthenticationCodeTypeMissedCall

/**
 * An authentication code is delivered via a private Telegram message, which can be
 * viewed from another active session
 */
export interface AuthenticationCodeTypeTelegramMessage {
  _: 'authenticationCodeTypeTelegramMessage'
  /** Length of the code */
  length: number
}

/** An authentication code is delivered via an SMS message to the specified phone number */
export interface AuthenticationCodeTypeSms {
  _: 'authenticationCodeTypeSms'
  /** Length of the code */
  length: number
}

/** An authentication code is delivered via a phone call to the specified phone number */
export interface AuthenticationCodeTypeCall {
  _: 'authenticationCodeTypeCall'
  /** Length of the code */
  length: number
}

/**
 * An authentication code is delivered by an immediately canceled call to the specified
 * phone number. The phone number that calls is the code that must be entered automatically
 */
export interface AuthenticationCodeTypeFlashCall {
  _: 'authenticationCodeTypeFlashCall'
  /** Pattern of the phone number from which the call will be made */
  pattern: string
}

/**
 * An authentication code is delivered by an immediately canceled call to the specified
 * phone number. The last digits of the phone number that calls are the code that must
 * be entered manually by the user
 */
export interface AuthenticationCodeTypeMissedCall {
  _: 'authenticationCodeTypeMissedCall'
  /** Prefix of the phone number from which the call will be made */
  phoneNumberPrefix: string
  /** Number of digits in the code, excluding the prefix */
  length: number
}
