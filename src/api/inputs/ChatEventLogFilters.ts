export type ChatEventLogFiltersInputUnion = ChatEventLogFiltersInput

/** Represents a set of filters used to obtain a chat event log */
export interface ChatEventLogFiltersInput {
  _: 'chatEventLogFilters'
  /** True, if message edits should be returned */
  messageEdits?: boolean
  /** True, if message deletions should be returned */
  messageDeletions?: boolean
  /** True, if pin/unpin events should be returned */
  messagePins?: boolean
  /** True, if members joining events should be returned */
  memberJoins?: boolean
  /** True, if members leaving events should be returned */
  memberLeaves?: boolean
  /** True, if invited member events should be returned */
  memberInvites?: boolean
  /** True, if member promotion/demotion events should be returned */
  memberPromotions?: boolean
  /** True, if member restricted/unrestricted/banned/unbanned events should be returned */
  memberRestrictions?: boolean
  /** True, if changes in chat information should be returned */
  infoChanges?: boolean
  /** True, if changes in chat settings should be returned */
  settingChanges?: boolean
}
