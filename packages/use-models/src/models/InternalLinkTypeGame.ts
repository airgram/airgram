/**
 * The link is a link to a game. Call searchPublicChat with the given bot username,
 * check that the user is a bot, ask the current user to select a chat to send the game,
 * and then call sendMessage with inputMessageGame
 */
export class InternalLinkTypeGameBaseModel {
  public _: 'internalLinkTypeGame'

  /** Username of the bot that owns the game */
  public botUsername: string

  /** Short name of the game */
  public gameShortName: string
}
