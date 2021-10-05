/**
 * The link is a link to a Telegram bot, which is supposed to be added to a group chat.
 * Call searchPublicChat with the given bot username, check that the user is a bot and
 * can be added to groups, ask the current user to select a group to add the bot to,
 * and then call sendBotStartMessage with the given start parameter and the chosen group
 * chat. Bots can be added to a public group only by administrators of the group
 */
export class InternalLinkTypeBotStartInGroupBaseModel {
  public _: 'internalLinkTypeBotStartInGroup'

  /** Username of the bot */
  public botUsername: string

  /** The parameter to be passed to sendBotStartMessage */
  public startParameter: string
}
