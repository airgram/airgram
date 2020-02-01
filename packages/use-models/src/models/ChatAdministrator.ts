/** Contains information about a chat administrator */
export class ChatAdministratorBaseModel {
  public _: 'chatAdministrator'

  /** User identifier of the administrator */
  public userId: number

  /** Custom title of the administrator */
  public customTitle: string

  /** True, if the user is the owner of the chat */
  public isOwner: boolean
}
