import { ShippingOptionUnion } from './ShippingOption'

export interface PaymentsValidatedRequestedInfo {
  _: 'payments.validatedRequestedInfo'
  flags: number
  id?: string
  shipping_options?: ShippingOptionUnion[]
}

export type PaymentsValidatedRequestedInfoUnion = PaymentsValidatedRequestedInfo
