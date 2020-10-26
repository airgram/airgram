/** Represents a date range */
export class DateRangeBaseModel {
  public _: 'dateRange'

  /** Point in time (Unix timestamp) at which the date range begins */
  public startDate: number

  /** Point in time (Unix timestamp) at which the date range ends */
  public endDate: number
}
