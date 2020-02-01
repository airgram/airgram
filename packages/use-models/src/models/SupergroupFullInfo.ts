import { ChatLocation } from '@airgram/core'

/** Contains full information about a supergroup or channel */
export class SupergroupFullInfoBaseModel {
  public _: 'supergroupFullInfo'

  /** Supergroup or channel description */
  public description: string

  /** Number of members in the supergroup or channel; 0 if unknown */
  public memberCount: number

  /** Number of privileged users in the supergroup or channel; 0 if unknown */
  public administratorCount: number

  /** Number of restricted users in the supergroup; 0 if unknown */
  public restrictedCount: number

  /** Number of users banned from chat; 0 if unknown */
  public bannedCount: number

  /**
   * Chat identifier of a discussion group for the channel, or a channel, for which the
   * supergroup is the designated discussion group; 0 if none or unknown
   */
  public linkedChatId: number

  /**
   * Delay between consecutive sent messages for non-administrator supergroup members,
   * in seconds
   */
  public slowModeDelay: number

  /**
   * Time left before next message can be sent in the supergroup, in seconds. An updateSupergroupFullInfo
   * update is not triggered when value of this field changes, but both new and old values
   * are non-zero
   */
  public slowModeDelayExpiresIn: number

  /** True, if members of the chat can be retrieved */
  public canGetMembers: boolean

  /** True, if the chat username can be changed */
  public canSetUsername: boolean

  /** True, if the supergroup sticker set can be changed */
  public canSetStickerSet: boolean

  /** True, if the supergroup location can be changed */
  public canSetLocation: boolean

  /** True, if the channel statistics is available through getChatStatisticsUrl */
  public canViewStatistics: boolean

  /**
   * True, if new chat members will have access to old messages. In public or discussion
   * groups and both public and private channels, old messages are always available, so
   * this option affects only private supergroups without a linked chat. The value of
   * this field is only available for chat administrators
   */
  public isAllHistoryAvailable: boolean

  /** Identifier of the supergroup sticker set; 0 if none */
  public stickerSetId: string

  /** Location to which the supergroup is connected; may be null */
  public location?: ChatLocation

  /** Invite link for this chat */
  public inviteLink: string

  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  public upgradedFromBasicGroupId: number

  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  public upgradedFromMaxMessageId: number
}
