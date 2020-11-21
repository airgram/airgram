/** A value with information about its recent changes */
export class StatisticalValueBaseModel {
  public _: 'statisticalValue'

  /** The current value */
  public value: number

  /** The value for the previous day */
  public previousValue: number

  /** The growth rate of the value, as a percentage */
  public growthRatePercentage: number
}
