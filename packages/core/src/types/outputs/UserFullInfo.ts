import { BotCommand, ChatPhoto } from './index'

export type UserFullInfoUnion = UserFullInfo

/** Contains full information about a user */
export interface UserFullInfo {
  _: 'userFullInfo'
  /** User profile photo; may be null */
  photo?: ChatPhoto
  /** True, if the user is blocked by the current user */
  isBlocked: boolean
  /** True, if the user can be called */
  canBeCalled: boolean
  /** True, if a video call can be created with the user */
  supportsVideoCalls: boolean
  /** True, if the user can't be called due to their privacy settings */
  hasPrivateCalls: boolean
  /** True, if the user can't be linked in forwarded messages due to their privacy settings */
  hasPrivateForwards: boolean
  /**
   * True, if the current user needs to explicitly allow to share their phone number with
   * the user when the method addContact is used
   */
  needPhoneNumberPrivacyException: boolean
  /** A short user bio */
  bio: string
  /**
   * For bots, the text that is shown on the bot's profile page and is sent together with
   * the link when users share the bot
   */
  shareText: string
  /** For bots, the text shown in the chat with the bot if the chat is empty */
  description: string
  /**
   * Number of group chats where both the other user and the current user are a member;
   * 0 for the current user
   */
  groupInCommonCount: number
  /** For bots, list of the bot commands */
  commands: BotCommand[]
}
