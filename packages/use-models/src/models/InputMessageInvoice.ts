import { Invoice } from '@airgram/core'

/** A message with an invoice; can be used only by bots */
export class InputMessageInvoiceBaseModel {
  public _: 'inputMessageInvoice'

  /** Invoice */
  public invoice: Invoice

  /** Product title; 1-32 characters */
  public title: string

  /** Product description; 0-255 characters */
  public description: string

  /** Product photo URL; optional */
  public photoUrl: string

  /** Product photo size */
  public photoSize: number

  /** Product photo width */
  public photoWidth: number

  /** Product photo height */
  public photoHeight: number

  /** The invoice payload */
  public payload: string

  /** Payment provider token */
  public providerToken: string

  /** JSON-encoded data about the invoice, which will be shared with the payment provider */
  public providerData: string

  /**
   * Unique invoice bot deep link parameter for the generation of this invoice. If empty,
   * it would be possible to pay directly from forwards of the invoice message
   */
  public startParameter: string
}
