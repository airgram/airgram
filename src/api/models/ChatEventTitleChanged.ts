/** The chat title was changed */
export class ChatEventTitleChangedBaseModel {
  public _: 'chatEventTitleChanged'
  /** Previous chat title */
  public oldTitle: string
  /** New chat title */
  public newTitle: string
}
