export type PaymentsProviderStripeUnion = PaymentsProviderStripe

/** Stripe payment provider */
export interface PaymentsProviderStripe {
  _: 'paymentsProviderStripe'
  /** Stripe API publishable key */
  publishableKey: string
  /** True, if the user country must be provided */
  needCountry: boolean
  /** True, if the user ZIP/postal code must be provided */
  needPostalCode: boolean
  /** True, if the cardholder name must be provided */
  needCardholderName: boolean
}
