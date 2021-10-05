import { BotCommands, ChatInviteLink, ChatLocation, ChatPhoto } from './index'

export type SupergroupFullInfoUnion = SupergroupFullInfo

/** Contains full information about a supergroup or channel */
export interface SupergroupFullInfo {
  _: 'supergroupFullInfo'
  /** Chat photo; may be null */
  photo?: ChatPhoto
  /** Supergroup or channel description */
  description: string
  /** Number of members in the supergroup or channel; 0 if unknown */
  memberCount: number
  /** Number of privileged users in the supergroup or channel; 0 if unknown */
  administratorCount: number
  /** Number of restricted users in the supergroup; 0 if unknown */
  restrictedCount: number
  /** Number of users banned from chat; 0 if unknown */
  bannedCount: number
  /**
   * Chat identifier of a discussion group for the channel, or a channel, for which the
   * supergroup is the designated discussion group; 0 if none or unknown
   */
  linkedChatId: number
  /**
   * Delay between consecutive sent messages for non-administrator supergroup members,
   * in seconds
   */
  slowModeDelay: number
  /**
   * Time left before next message can be sent in the supergroup, in seconds. An updateSupergroupFullInfo
   * update is not triggered when value of this field changes, but both new and old values
   * are non-zero
   */
  slowModeDelayExpiresIn: number
  /** True, if members of the chat can be retrieved */
  canGetMembers: boolean
  /** True, if the chat username can be changed */
  canSetUsername: boolean
  /** True, if the supergroup sticker set can be changed */
  canSetStickerSet: boolean
  /** True, if the supergroup location can be changed */
  canSetLocation: boolean
  /** True, if the supergroup or channel statistics are available */
  canGetStatistics: boolean
  /**
   * True, if new chat members will have access to old messages. In public or discussion
   * groups and both public and private channels, old messages are always available, so
   * this option affects only private supergroups without a linked chat. The value of
   * this field is only available for chat administrators
   */
  isAllHistoryAvailable: boolean
  /** Identifier of the supergroup sticker set; 0 if none */
  stickerSetId: string
  /** Location to which the supergroup is connected; may be null */
  location?: ChatLocation
  /**
   * Primary invite link for this chat; may be null. For chat administrators with can_invite_users
   * right only
   */
  inviteLink?: ChatInviteLink
  /** List of commands of bots in the group */
  botCommands: BotCommands[]
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  upgradedFromBasicGroupId: number
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  upgradedFromMaxMessageId: number
}
