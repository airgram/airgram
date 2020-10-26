import { ChatMemberStatusUnion } from '@airgram/core'

/**
 * Represents a supergroup or channel with zero or more members (subscribers in the
 * case of channels). From the point of view of the system, a channel is a special kind
 * of a supergroup: only administrators can post and see the list of members, and posts
 * from all administrators use the name and photo of the channel instead of individual
 * names and profile photos. Unlike supergroups, channels can have an unlimited number
 * of subscribers
 */
export class SupergroupBaseModel {
  public _: 'supergroup'

  /** Supergroup or channel identifier */
  public id: number

  /** Username of the supergroup or channel; empty for private supergroups or channels */
  public username: string

  /**
   * Point in time (Unix timestamp) when the current user joined, or the point in time
   * when the supergroup or channel was created, in case the user is not a member
   */
  public date: number

  /**
   * Status of the current user in the supergroup or channel; custom title will be always
   * empty
   */
  public status: ChatMemberStatusUnion

  /**
   * Number of members in the supergroup or channel; 0 if unknown. Currently it is guaranteed
   * to be known only if the supergroup or channel was received through searchPublicChats,
   * searchChatsNearby, getInactiveSupergroupChats, getSuitableDiscussionChats, getGroupsInCommon,
   * or getUserPrivacySettingRules
   */
  public memberCount: number

  /**
   * True, if the channel has a discussion group, or the supergroup is the designated
   * discussion group for a channel
   */
  public hasLinkedChat: boolean

  /**
   * True, if the supergroup is connected to a location, i.e. the supergroup is a location-based
   * supergroup
   */
  public hasLocation: boolean

  /**
   * True, if messages sent to the channel should contain information about the sender.
   * This field is only applicable to channels
   */
  public signMessages: boolean

  /** True, if the slow mode is enabled in the supergroup */
  public isSlowModeEnabled: boolean

  /** True, if the supergroup is a channel */
  public isChannel: boolean

  /** True, if the supergroup or channel is verified */
  public isVerified: boolean

  /**
   * If non-empty, contains a human-readable description of the reason why access to this
   * supergroup or channel must be restricted
   */
  public restrictionReason: string

  /** True, if many users reported this supergroup as a scam */
  public isScam: boolean
}
