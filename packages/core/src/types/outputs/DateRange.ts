export type DateRangeUnion = DateRange

/** Represents a date range */
export interface DateRange {
  _: 'dateRange'
  /** Point in time (Unix timestamp) at which the date range begins */
  startDate: number
  /** Point in time (Unix timestamp) at which the date range ends */
  endDate: number
}
