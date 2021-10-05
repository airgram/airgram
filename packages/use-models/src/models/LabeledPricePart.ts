/** Portion of the price of a product (e.g., "delivery cost", "tax amount") */
export class LabeledPricePartBaseModel {
  public _: 'labeledPricePart'

  /** Label for this portion of the product price */
  public label: string

  /** Currency amount in the smallest units of the currency */
  public amount: number
}
