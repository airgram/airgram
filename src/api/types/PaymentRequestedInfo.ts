import { PostAddressUnion } from './PostAddress'

export interface PaymentRequestedInfo {
  _: 'paymentRequestedInfo'
  flags: number
  name?: string
  phone?: string
  email?: string
  shipping_address?: PostAddressUnion
}

export type PaymentRequestedInfoUnion = PaymentRequestedInfo
