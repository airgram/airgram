/** A message with an invoice from a bot */
export class PushMessageContentInvoiceBaseModel {
  public _: 'pushMessageContentInvoice'

  /** Product price */
  public price: string

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
