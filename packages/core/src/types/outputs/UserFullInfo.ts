import { BotInfo, ChatPhoto } from './index'

export type UserFullInfoUnion = UserFullInfo

/** Contains full information about a user */
export interface UserFullInfo {
  _: 'userFullInfo'
  /** User profile photo; may be null */
  photo?: ChatPhoto
  /** True, if the user can be called */
  canBeCalled: boolean
  /** True, if a video call can be created with the user */
  supportsVideoCalls: boolean
  /** True, if the user can't be called due to their privacy settings */
  hasPrivateCalls: boolean
  /**
   * True, if the current user needs to explicitly allow to share their phone number with
   * the user when the method addContact is used
   */
  needPhoneNumberPrivacyException: boolean
  /** A short user bio */
  bio: string
  /** For bots, the text that is included with the link when users share the bot */
  shareText: string
  /**
   * Number of group chats where both the other user and the current user are a member;
   * 0 for the current user
   */
  groupInCommonCount: number
  /** If the user is a bot, information about the bot; may be null */
  botInfo?: BotInfo
}
