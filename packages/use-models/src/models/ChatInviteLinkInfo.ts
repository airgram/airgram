import { ChatPhotoInfo, ChatTypeUnion } from '@airgram/core'

/** Contains information about a chat invite link */
export class ChatInviteLinkInfoBaseModel {
  public _: 'chatInviteLinkInfo'

  /**
   * Chat identifier of the invite link; 0 if the user has no access to the chat before
   * joining
   */
  public chatId: number

  /**
   * If non-zero, the amount of time for which read access to the chat will remain available,
   * in seconds
   */
  public accessibleFor: number

  /** Type of the chat */
  public type: ChatTypeUnion

  /** Title of the chat */
  public title: string

  /** Chat photo; may be null */
  public photo?: ChatPhotoInfo

  /** Chat description */
  public description: string

  /** Number of members in the chat */
  public memberCount: number

  /** User identifiers of some chat members that may be known to the current user */
  public memberUserIds: number[]

  /** True, if the link only creates join request */
  public createsJoinRequest: boolean

  /**
   * True, if the chat is a public supergroup or channel, i.e. it has a username or it
   * is a location-based supergroup
   */
  public isPublic: boolean
}
