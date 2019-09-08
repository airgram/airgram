import { ChatMember } from '@airgram/core'

/** Contains a list of chat members */
export class ChatMembersBaseModel {
  public _: 'chatMembers'

  /** Approximate total count of chat members found */
  public totalCount: number

  /** A list of chat members */
  public members: ChatMember[]
}
