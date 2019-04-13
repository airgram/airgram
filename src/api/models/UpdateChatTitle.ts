/** The title of a chat was changed */
export class UpdateChatTitleBaseModel {
  public _: 'updateChatTitle'
  /** Chat identifier */
  public chatId: number
  /** The new chat title */
  public title: string
}
