/**
 * Provides information about the method by which an authentication code is delivered
 * to the user
 */
export type AuthenticationCodeTypeUnion = AuthenticationCodeTypeTelegramMessage
  | AuthenticationCodeTypeSms
  | AuthenticationCodeTypeCall
  | AuthenticationCodeTypeFlashCall

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
 * An authentication code is delivered by an immediately cancelled call to the specified
 * phone number. The number from which the call was made is the code
 */
export interface AuthenticationCodeTypeFlashCall {
  _: 'authenticationCodeTypeFlashCall'
  /** Pattern of the phone number from which the call will be made */
  pattern: string
}
