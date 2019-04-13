import { Invoice } from '../outputs'

/** A message with an invoice; can be used only by bots and only in private chats */
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
  /** Unique invoice bot start_parameter for the generation of this invoice */
  public startParameter: string
}
