/** The chat description was changed */
export class ChatEventDescriptionChangedBaseModel {
  public _: 'chatEventDescriptionChanged'
  /** Previous chat description */
  public oldDescription: string
  /** New chat description */
  public newDescription: string
}
