/** The message will be sent at the specified date */
export class MessageSchedulingStateSendAtDateBaseModel {
  public _: 'messageSchedulingStateSendAtDate'

  /** Date the message will be sent. The date must be within 367 days in the future */
  public sendDate: number
}
