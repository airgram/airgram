/** The sign_messages setting of a channel was toggled */
export class ChatEventSignMessagesToggledBaseModel {
  public _: 'chatEventSignMessagesToggled'

  /** New value of sign_messages */
  public signMessages: boolean
}
