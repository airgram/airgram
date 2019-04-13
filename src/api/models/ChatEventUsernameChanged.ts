/** The chat username was changed */
export class ChatEventUsernameChangedBaseModel {
  public _: 'chatEventUsernameChanged'
  /** Previous chat username */
  public oldUsername: string
  /** New chat username */
  public newUsername: string
}
