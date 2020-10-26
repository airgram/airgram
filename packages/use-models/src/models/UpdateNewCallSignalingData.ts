/** New call signaling data arrived */
export class UpdateNewCallSignalingDataBaseModel {
  public _: 'updateNewCallSignalingData'

  /** The call identifier */
  public callId: number

  /** The data */
  public data: string
}
