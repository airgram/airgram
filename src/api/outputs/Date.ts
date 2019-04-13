export type DateUnion = Date

/** Represents a date according to the Gregorian calendar */
export interface Date {
  _: 'date'
  /** Day of the month, 1-31 */
  day: number
  /** Month, 1-12 */
  month: number
  /** Year, 1-9999 */
  year: number
}
