import { Address } from './index'

export type OrderInfoUnion = OrderInfo

/** Order information */
export interface OrderInfo {
  _: 'orderInfo'
  /** Name of the user */
  name: string
  /** Phone number of the user */
  phoneNumber: string
  /** Email address of the user */
  emailAddress: string
  /** Shipping address for this order; may be null */
  shippingAddress?: Address
}
