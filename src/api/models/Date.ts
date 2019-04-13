/** Represents a date according to the Gregorian calendar */
export class DateBaseModel {
  public _: 'date'
  /** Day of the month, 1-31 */
  public day: number
  /** Month, 1-12 */
  public month: number
  /** Year, 1-9999 */
  public year: number
}
