import { ShippingOption } from './index'

export type ValidatedOrderInfoUnion = ValidatedOrderInfo

/**
 * Contains a temporary identifier of validated order information, which is stored for
 * one hour. Also contains the available shipping options
 */
export interface ValidatedOrderInfo {
  _: 'validatedOrderInfo'
  /** Temporary identifier of the order information */
  orderInfoId: string
  /** Available shipping options */
  shippingOptions: ShippingOption[]
}
