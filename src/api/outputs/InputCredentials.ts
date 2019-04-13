/** Contains information about the payment method chosen by the user */
export type InputCredentialsUnion = InputCredentialsSaved
  | InputCredentialsNew
  | InputCredentialsAndroidPay
  | InputCredentialsApplePay

/**
 * Applies if a user chooses some previously saved payment credentials. To use their
 * previously saved credentials, the user must have a valid temporary password
 */
export interface InputCredentialsSaved {
  _: 'inputCredentialsSaved'
  /** Identifier of the saved credentials */
  savedCredentialsId: string
}

/** Applies if a user enters new credentials on a payment provider website */
export interface InputCredentialsNew {
  _: 'inputCredentialsNew'
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  data: string
  /** True, if the credential identifier can be saved on the server side */
  allowSave: boolean
}

/** Applies if a user enters new credentials using Android Pay */
export interface InputCredentialsAndroidPay {
  _: 'inputCredentialsAndroidPay'
  /** JSON-encoded data with the credential identifier */
  data: string
}

/** Applies if a user enters new credentials using Apple Pay */
export interface InputCredentialsApplePay {
  _: 'inputCredentialsApplePay'
  /** JSON-encoded data with the credential identifier */
  data: string
}
