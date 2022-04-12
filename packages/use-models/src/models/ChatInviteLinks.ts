import { ChatInviteLink } from '@airgram/core'

/** Contains a list of chat invite links */
export class ChatInviteLinksBaseModel {
  public _: 'chatInviteLinks'

  /** Approximate total number of chat invite links found */
  public totalCount: number

  /** List of invite links */
  public inviteLinks: ChatInviteLink[]
}
