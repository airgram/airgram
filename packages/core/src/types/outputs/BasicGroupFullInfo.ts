import { BotCommands, ChatInviteLink, ChatMember, ChatPhoto } from './index'

export type BasicGroupFullInfoUnion = BasicGroupFullInfo

/** Contains full information about a basic group */
export interface BasicGroupFullInfo {
  _: 'basicGroupFullInfo'
  /** Chat photo; may be null */
  photo?: ChatPhoto
  /** Group description. Updated only after the basic group is opened */
  description: string
  /** User identifier of the creator of the group; 0 if unknown */
  creatorUserId: number
  /** Group members */
  members: ChatMember[]
  /**
   * Primary invite link for this group; may be null. For chat administrators with can_invite_users
   * right only. Updated only after the basic group is opened
   */
  inviteLink?: ChatInviteLink
  /** List of commands of bots in the group */
  botCommands: BotCommands[]
}
