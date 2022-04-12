/** The chat available reactions were changed */
export class ChatEventAvailableReactionsChangedBaseModel {
  public _: 'chatEventAvailableReactionsChanged'

  /** Previous chat available reactions */
  public oldAvailableReactions: string[]

  /** New chat available reactions */
  public newAvailableReactions: string[]
}
