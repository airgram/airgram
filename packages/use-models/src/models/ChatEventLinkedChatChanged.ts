/** The linked chat of a supergroup was changed */
export class ChatEventLinkedChatChangedBaseModel {
  public _: 'chatEventLinkedChatChanged'

  /** Previous supergroup linked chat identifier */
  public oldLinkedChatId: number

  /** New supergroup linked chat identifier */
  public newLinkedChatId: number
}
