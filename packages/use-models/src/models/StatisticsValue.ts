/** A statistics value */
export class StatisticsValueBaseModel {
  public _: 'statisticsValue'

  /** The value */
  public value: number

  /** The value for the previous day */
  public previousValue: number

  /** The growth rate of the value, as a percentage */
  public growthRatePercentage: number
}
