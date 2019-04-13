/** Contains the result of a payment request */
export class PaymentResultBaseModel {
  public _: 'paymentResult'
  /**
   * True, if the payment request was successful; otherwise the verification_url will
   * be not empty
   */
  public success: boolean
  /** URL for additional payment credentials verification */
  public verificationUrl: string
}
