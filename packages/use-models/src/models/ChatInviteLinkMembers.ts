import { ChatInviteLinkMember } from '@airgram/core'

/** Contains a list of chat members joined a chat via an invite link */
export class ChatInviteLinkMembersBaseModel {
  public _: 'chatInviteLinkMembers'

  /** Approximate total count of chat members found */
  public totalCount: number

  /** List of chat members, joined a chat via an invite link */
  public members: ChatInviteLinkMember[]
}
