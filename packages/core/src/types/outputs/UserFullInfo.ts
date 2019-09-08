import { BotInfo } from './index'

export type UserFullInfoUnion = UserFullInfo

/** Contains full information about a user (except the full list of profile photos) */
export interface UserFullInfo {
  _: 'userFullInfo'
  /** True, if the user is blacklisted by the current user */
  isBlocked: boolean
  /** True, if the user can be called */
  canBeCalled: boolean
  /** True, if the user can't be called due to their privacy settings */
  hasPrivateCalls: boolean
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
