import { BotInfo, ChatPhoto } from '@airgram/core'

/** Contains full information about a user */
export class UserFullInfoBaseModel {
  public _: 'userFullInfo'

  /** User profile photo; may be null */
  public photo?: ChatPhoto

  /** True, if the user can be called */
  public canBeCalled: boolean

  /** True, if a video call can be created with the user */
  public supportsVideoCalls: boolean

  /** True, if the user can't be called due to their privacy settings */
  public hasPrivateCalls: boolean

  /**
   * True, if the current user needs to explicitly allow to share their phone number with
   * the user when the method addContact is used
   */
  public needPhoneNumberPrivacyException: boolean

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
