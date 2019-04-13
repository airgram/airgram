/**
 * A data field contains an error. The error is considered resolved when the field's
 * value changes
 */
export class InputPassportElementErrorSourceDataFieldBaseModel {
  public _: 'inputPassportElementErrorSourceDataField'
  /** Field name */
  public fieldName: string
  /** Current data hash */
  public dataHash: string
}
