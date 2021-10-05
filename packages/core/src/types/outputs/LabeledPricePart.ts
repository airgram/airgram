export type LabeledPricePartUnion = LabeledPricePart

/** Portion of the price of a product (e.g., "delivery cost", "tax amount") */
export interface LabeledPricePart {
  _: 'labeledPricePart'
  /** Label for this portion of the product price */
  label: string
  /** Currency amount in the smallest units of the currency */
  amount: number
}
