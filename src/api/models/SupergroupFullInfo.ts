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
  /** True, if members of the chat can be retrieved */
  public canGetMembers: boolean
  /** True, if the chat can be made public */
  public canSetUsername: boolean
  /** True, if the supergroup sticker set can be changed */
  public canSetStickerSet: boolean
  /**
   * True, if new chat members will have access to old messages. In public supergroups
   * and both public and private channels, old messages are always available, so this
   * option affects only private supergroups. The value of this field is only available
   * for chat administrators
   */
  public isAllHistoryAvailable: boolean
  /** Identifier of the supergroup sticker set; 0 if none */
  public stickerSetId: number | string
  /** Invite link for this chat */
  public inviteLink: string
  /** Identifier of the pinned message in the chat; 0 if none */
  public pinnedMessageId: number
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  public upgradedFromBasicGroupId: number
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  public upgradedFromMaxMessageId: number
}
