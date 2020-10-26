/** The payload for a callback button requiring password */
export class CallbackQueryPayloadDataWithPasswordBaseModel {
  public _: 'callbackQueryPayloadDataWithPassword'

  /** The password for the current user */
  public password: string

  /** Data that was attached to the callback button */
  public data: string
}
