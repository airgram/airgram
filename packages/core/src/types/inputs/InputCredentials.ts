/** Contains information about the payment method chosen by the user */
export type InputCredentialsInputUnion = InputCredentialsSavedInput
  | InputCredentialsNewInput
  | InputCredentialsApplePayInput
  | InputCredentialsGooglePayInput

/**
 * Applies if a user chooses some previously saved payment credentials. To use their
 * previously saved credentials, the user must have a valid temporary password
 */
export interface InputCredentialsSavedInput {
  _: 'inputCredentialsSaved'
  /** Identifier of the saved credentials */
  savedCredentialsId?: string
}

/** Applies if a user enters new credentials on a payment provider website */
export interface InputCredentialsNewInput {
  _: 'inputCredentialsNew'
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  data?: string
  /** True, if the credential identifier can be saved on the server side */
  allowSave?: boolean
}

/** Applies if a user enters new credentials using Apple Pay */
export interface InputCredentialsApplePayInput {
  _: 'inputCredentialsApplePay'
  /** JSON-encoded data with the credential identifier */
  data?: string
}

/** Applies if a user enters new credentials using Google Pay */
export interface InputCredentialsGooglePayInput {
  _: 'inputCredentialsGooglePay'
  /** JSON-encoded data with the credential identifier */
  data?: string
}
