import { ChatEventActionUnion } from '@airgram/core'

/** Represents a chat event */
export class ChatEventBaseModel {
  public _: 'chatEvent'

  /** Chat event identifier */
  public id: string

  /** Point in time (Unix timestamp) when the event happened */
  public date: number

  /** Identifier of the user who performed the action that triggered the event */
  public userId: number

  /** Action performed by the user */
  public action: ChatEventActionUnion
}
