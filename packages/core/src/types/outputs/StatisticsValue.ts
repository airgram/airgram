export type StatisticsValueUnion = StatisticsValue

/** A statistics value */
export interface StatisticsValue {
  _: 'statisticsValue'
  /** The value */
  value: number
  /** The value for the previous day */
  previousValue: number
  /** The growth rate of the value, as a percentage */
  growthRatePercentage: number
}
