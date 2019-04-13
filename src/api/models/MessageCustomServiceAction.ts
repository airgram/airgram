/** A non-standard action has happened in the chat */
export class MessageCustomServiceActionBaseModel {
  public _: 'messageCustomServiceAction'
  /** Message text to be shown in the chat */
  public text: string
}
