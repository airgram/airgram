export type PaymentResultUnion = PaymentResult

/** Contains the result of a payment request */
export interface PaymentResult {
  _: 'paymentResult'
  /**
   * True, if the payment request was successful; otherwise the verification_url will
   * be non-empty
   */
  success: boolean
  /** URL for additional payment credentials verification */
  verificationUrl: string
}
