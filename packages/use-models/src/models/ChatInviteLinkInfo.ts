import { ChatPhoto, ChatTypeUnion } from '@airgram/core'

/** Contains information about a chat invite link */
export class ChatInviteLinkInfoBaseModel {
  public _: 'chatInviteLinkInfo'

  /** Chat identifier of the invite link; 0 if the user is not a member of this chat */
  public chatId: number

  /** Contains information about the type of the chat */
  public type: ChatTypeUnion

  /** Title of the chat */
  public title: string

  /** Chat photo; may be null */
  public photo?: ChatPhoto

  /** Number of members */
  public memberCount: number

  /** User identifiers of some chat members that may be known to the current user */
  public memberUserIds: number[]

  /**
   * True, if the chat is a public supergroup or channel, i.e. it has a username or it
   * is a location-based supergroup
   */
  public isPublic: boolean
}
