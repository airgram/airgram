import {
  BotCommands,
  ChatInviteLink,
  ChatMember,
  ChatPhoto
} from '@airgram/core'

/** Contains full information about a basic group */
export class BasicGroupFullInfoBaseModel {
  public _: 'basicGroupFullInfo'

  /** Chat photo; may be null */
  public photo?: ChatPhoto

  /** Group description. Updated only after the basic group is opened */
  public description: string

  /** User identifier of the creator of the group; 0 if unknown */
  public creatorUserId: number

  /** Group members */
  public members: ChatMember[]

  /**
   * Primary invite link for this group; may be null. For chat administrators with can_invite_users
   * right only. Updated only after the basic group is opened
   */
  public inviteLink?: ChatInviteLink

  /** List of commands of bots in the group */
  public botCommands: BotCommands[]
}
