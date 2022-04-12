import { ChatInviteLinkInfo } from '@airgram/core'

/** A chat invite link */
export class TMeUrlTypeChatInviteBaseModel {
  public _: 'tMeUrlTypeChatInvite'

  /** Information about the chat invite link */
  public info: ChatInviteLinkInfo
}
