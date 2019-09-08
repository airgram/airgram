import { OrderInfo } from '@airgram/core'

/**
 * A new incoming pre-checkout query; for bots only. Contains full information about
 * a checkout
 */
export class UpdateNewPreCheckoutQueryBaseModel {
  public _: 'updateNewPreCheckoutQuery'

  /** Unique query identifier */
  public id: string

  /** Identifier of the user who sent the query */
  public senderUserId: number

  /** Currency for the product price */
  public currency: string

  /** Total price for the product, in the minimal quantity of the currency */
  public totalAmount: number

  /** Invoice payload */
  public invoicePayload: string

  /** Identifier of a shipping option chosen by the user; may be empty if not applicable */
  public shippingOptionId: string

  /** Information about the order; may be null */
  public orderInfo?: OrderInfo
}
