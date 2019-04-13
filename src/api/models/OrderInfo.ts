import { Address } from '../outputs'

/** Order information */
export class OrderInfoBaseModel {
  public _: 'orderInfo'
  /** Name of the user */
  public name: string
  /** Phone number of the user */
  public phoneNumber: string
  /** Email address of the user */
  public emailAddress: string
  /** Shipping address for this order; may be null */
  public shippingAddress?: Address
}
