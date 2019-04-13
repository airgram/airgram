import { BotInfo } from '../outputs'

/** Contains full information about a user (except the full list of profile photos) */
export class UserFullInfoBaseModel {
  public _: 'userFullInfo'
  /** True, if the user is blacklisted by the current user */
  public isBlocked: boolean
  /** True, if the user can be called */
  public canBeCalled: boolean
  /** True, if the user can't be called due to their privacy settings */
  public hasPrivateCalls: boolean
  /** A short user bio */
  public bio: string
  /** For bots, the text that is included with the link when users share the bot */
  public shareText: string
  /**
   * Number of group chats where both the other user and the current user are a member;
   * 0 for the current user
   */
  public groupInCommonCount: number
  /** If the user is a bot, information about the bot; may be null */
  public botInfo?: BotInfo
}
