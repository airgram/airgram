import { ChatMemberStatusUnion } from '@airgram/core'

/** A new chat member was invited */
export class ChatEventMemberInvitedBaseModel {
  public _: 'chatEventMemberInvited'

  /** New member user identifier */
  public userId: number

  /** New member status */
  public status: ChatMemberStatusUnion
}
