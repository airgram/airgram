import { ChatEventActionUnion, MessageSenderUnion } from './index'

export type ChatEventUnion = ChatEvent

/** Represents a chat event */
export interface ChatEvent {
  _: 'chatEvent'
  /** Chat event identifier */
  id: string
  /** Point in time (Unix timestamp) when the event happened */
  date: number
  /** Identifier of the user or chat who performed the action */
  memberId: MessageSenderUnion
  /** The action */
  action: ChatEventActionUnion
}
