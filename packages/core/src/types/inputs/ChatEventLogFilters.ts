export type ChatEventLogFiltersInputUnion = ChatEventLogFiltersInput

/** Represents a set of filters used to obtain a chat event log */
export interface ChatEventLogFiltersInput {
  _: 'chatEventLogFilters'
  /** True, if message edits need to be returned */
  messageEdits?: boolean
  /** True, if message deletions need to be returned */
  messageDeletions?: boolean
  /** True, if pin/unpin events need to be returned */
  messagePins?: boolean
  /** True, if members joining events need to be returned */
  memberJoins?: boolean
  /** True, if members leaving events need to be returned */
  memberLeaves?: boolean
  /** True, if invited member events need to be returned */
  memberInvites?: boolean
  /** True, if member promotion/demotion events need to be returned */
  memberPromotions?: boolean
  /** True, if member restricted/unrestricted/banned/unbanned events need to be returned */
  memberRestrictions?: boolean
  /** True, if changes in chat information need to be returned */
  infoChanges?: boolean
  /** True, if changes in chat settings need to be returned */
  settingChanges?: boolean
  /** True, if changes to invite links need to be returned */
  inviteLinkChanges?: boolean
  /** True, if video chat actions need to be returned */
  videoChatChanges?: boolean
}
