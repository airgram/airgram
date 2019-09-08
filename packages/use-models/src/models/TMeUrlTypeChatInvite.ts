import { ChatInviteLinkInfo } from '@airgram/core'

/** A chat invite link */
export class TMeUrlTypeChatInviteBaseModel {
  public _: 'tMeUrlTypeChatInvite'

  /** Chat invite link info */
  public info: ChatInviteLinkInfo
}
