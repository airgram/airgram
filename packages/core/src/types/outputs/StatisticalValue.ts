export type StatisticalValueUnion = StatisticalValue

/** A value with information about its recent changes */
export interface StatisticalValue {
  _: 'statisticalValue'
  /** The current value */
  value: number
  /** The value for the previous day */
  previousValue: number
  /** The growth rate of the value, as a percentage */
  growthRatePercentage: number
}
