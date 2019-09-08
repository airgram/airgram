/** A new incoming query; for bots only */
export class UpdateNewCustomQueryBaseModel {
  public _: 'updateNewCustomQuery'

  /** The query identifier */
  public id: string

  /** JSON-serialized query data */
  public data: string

  /** Query timeout */
  public timeout: number
}
