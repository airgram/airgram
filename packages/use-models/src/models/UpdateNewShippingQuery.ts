import { Address } from '@airgram/core'

/** A new incoming shipping query; for bots only. Only for invoices with flexible price */
export class UpdateNewShippingQueryBaseModel {
  public _: 'updateNewShippingQuery'

  /** Unique query identifier */
  public id: string

  /** Identifier of the user who sent the query */
  public senderUserId: number

  /** Invoice payload */
  public invoicePayload: string

  /** User shipping address */
  public shippingAddress: Address
}
