/** A bot (see https://core.telegram.org/bots) */
export class UserTypeBotBaseModel {
  public _: 'userTypeBot'

  /** True, if the bot can be invited to basic group and supergroup chats */
  public canJoinGroups: boolean

  /**
   * True, if the bot can read all messages in basic group or supergroup chats and not
   * just those addressed to the bot. In private and channel chats a bot can always read
   * all messages
   */
  public canReadAllGroupMessages: boolean

  /** True, if the bot supports inline queries */
  public isInline: boolean

  /** Placeholder for inline queries (displayed on the application input field) */
  public inlineQueryPlaceholder: string

  /**
   * True, if the location of the user is expected to be sent with every inline query
   * to this bot
   */
  public needLocation: boolean
}
