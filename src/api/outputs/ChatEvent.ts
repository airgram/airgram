import { ChatEventActionUnion } from './index'

export type ChatEventUnion = ChatEvent

/** Represents a chat event */
export interface ChatEvent {
  _: 'chatEvent'
  /** Chat event identifier */
  id: number | string
  /** Point in time (Unix timestamp) when the event happened */
  date: number
  /** Identifier of the user who performed the action that triggered the event */
  userId: number
  /** Action performed by the user */
  action: ChatEventActionUnion
}
