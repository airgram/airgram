import { AddressInput } from './index'

export type OrderInfoInputUnion = OrderInfoInput

/** Order information */
export interface OrderInfoInput {
  _: 'orderInfo'
  /** Name of the user */
  name?: string
  /** Phone number of the user */
  phoneNumber?: string
  /** Email address of the user */
  emailAddress?: string
  /** Shipping address for this order; may be null */
  shippingAddress?: AddressInput
}
