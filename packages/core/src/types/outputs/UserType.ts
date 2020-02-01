/**
 * Represents the type of a user. The following types are possible: regular users, deleted
 * users and bots
 */
export type UserTypeUnion = UserTypeRegular
  | UserTypeDeleted
  | UserTypeBot
  | UserTypeUnknown

/** A regular user */
export interface UserTypeRegular {
  _: 'userTypeRegular'
}

/**
 * A deleted user or deleted bot. No information on the user besides the user identifier
 * is available. It is not possible to perform any active actions on this type of user
 */
export interface UserTypeDeleted {
  _: 'userTypeDeleted'
}

/** A bot (see https://core.telegram.org/bots) */
export interface UserTypeBot {
  _: 'userTypeBot'
  /** True, if the bot can be invited to basic group and supergroup chats */
  canJoinGroups: boolean
  /**
   * True, if the bot can read all messages in basic group or supergroup chats and not
   * just those addressed to the bot. In private and channel chats a bot can always read
   * all messages
   */
  canReadAllGroupMessages: boolean
  /** True, if the bot supports inline queries */
  isInline: boolean
  /** Placeholder for inline queries (displayed on the client input field) */
  inlineQueryPlaceholder: string
  /**
   * True, if the location of the user should be sent with every inline query to this
   * bot
   */
  needLocation: boolean
}

/**
 * No information on the user besides the user identifier is available, yet this user
 * has not been deleted. This object is extremely rare and must be handled like a deleted
 * user. It is not possible to perform any actions on users of this type
 */
export interface UserTypeUnknown {
  _: 'userTypeUnknown'
}
