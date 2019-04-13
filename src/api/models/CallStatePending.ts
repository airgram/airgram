/** The call is pending, waiting to be accepted by a user */
export class CallStatePendingBaseModel {
  public _: 'callStatePending'
  /** True, if the call has already been created by the server */
  public isCreated: boolean
  /** True, if the call has already been received by the other party */
  public isReceived: boolean
}
