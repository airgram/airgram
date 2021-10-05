/** A supergroup or channel (with unlimited members) */
export class ChatTypeSupergroupBaseModel {
  public _: 'chatTypeSupergroup'

  /** Supergroup or channel identifier */
  public supergroupId: number

  /** True, if the supergroup is a channel */
  public isChannel: boolean
}
