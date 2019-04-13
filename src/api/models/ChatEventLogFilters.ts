/** Represents a set of filters used to obtain a chat event log */
export class ChatEventLogFiltersBaseModel {
  public _: 'chatEventLogFilters'
  /** True, if message edits should be returned */
  public messageEdits: boolean
  /** True, if message deletions should be returned */
  public messageDeletions: boolean
  /** True, if pin/unpin events should be returned */
  public messagePins: boolean
  /** True, if members joining events should be returned */
  public memberJoins: boolean
  /** True, if members leaving events should be returned */
  public memberLeaves: boolean
  /** True, if invited member events should be returned */
  public memberInvites: boolean
  /** True, if member promotion/demotion events should be returned */
  public memberPromotions: boolean
  /** True, if member restricted/unrestricted/banned/unbanned events should be returned */
  public memberRestrictions: boolean
  /** True, if changes in chat information should be returned */
  public infoChanges: boolean
  /** True, if changes in chat settings should be returned */
  public settingChanges: boolean
}
