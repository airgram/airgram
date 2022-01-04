import { ChatEventActionUnion, MessageSenderUnion } from '@airgram/core'

/** Represents a chat event */
export class ChatEventBaseModel {
  public _: 'chatEvent'

  /** Chat event identifier */
  public id: string

  /** Point in time (Unix timestamp) when the event happened */
  public date: number

  /** Identifier of the user or chat who performed the action */
  public memberId: MessageSenderUnion

  /** The action */
  public action: ChatEventActionUnion
}
