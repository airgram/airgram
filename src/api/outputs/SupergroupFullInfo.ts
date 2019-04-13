export type SupergroupFullInfoUnion = SupergroupFullInfo

/** Contains full information about a supergroup or channel */
export interface SupergroupFullInfo {
  _: 'supergroupFullInfo'
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
  /** True, if members of the chat can be retrieved */
  canGetMembers: boolean
  /** True, if the chat can be made public */
  canSetUsername: boolean
  /** True, if the supergroup sticker set can be changed */
  canSetStickerSet: boolean
  /**
   * True, if new chat members will have access to old messages. In public supergroups
   * and both public and private channels, old messages are always available, so this
   * option affects only private supergroups. The value of this field is only available
   * for chat administrators
   */
  isAllHistoryAvailable: boolean
  /** Identifier of the supergroup sticker set; 0 if none */
  stickerSetId: number | string
  /** Invite link for this chat */
  inviteLink: string
  /** Identifier of the pinned message in the chat; 0 if none */
  pinnedMessageId: number
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  upgradedFromBasicGroupId: number
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  upgradedFromMaxMessageId: number
}
