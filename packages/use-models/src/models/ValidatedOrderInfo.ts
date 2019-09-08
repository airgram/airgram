import { ShippingOption } from '@airgram/core'

/**
 * Contains a temporary identifier of validated order information, which is stored for
 * one hour. Also contains the available shipping options
 */
export class ValidatedOrderInfoBaseModel {
  public _: 'validatedOrderInfo'

  /** Temporary identifier of the order information */
  public orderInfoId: string

  /** Available shipping options */
  public shippingOptions: ShippingOption[]
}
