/** Stripe payment provider */
export class PaymentsProviderStripeBaseModel {
  public _: 'paymentsProviderStripe'
  /** Stripe API publishable key */
  public publishableKey: string
  /** True, if the user country must be provided */
  public needCountry: boolean
  /** True, if the user ZIP/postal code must be provided */
  public needPostalCode: boolean
  /** True, if the cardholder name must be provided */
  public needCardholderName: boolean
}
