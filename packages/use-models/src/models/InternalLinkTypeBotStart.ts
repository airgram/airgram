/**
 * The link is a link to a chat with a Telegram bot. Call searchPublicChat with the
 * given bot username, check that the user is a bot, show START button in the chat with
 * the bot, and then call sendBotStartMessage with the given start parameter after the
 * button is pressed
 */
export class InternalLinkTypeBotStartBaseModel {
  public _: 'internalLinkTypeBotStart'

  /** Username of the bot */
  public botUsername: string

  /** The parameter to be passed to sendBotStartMessage */
  public startParameter: string
}
