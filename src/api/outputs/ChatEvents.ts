import { ChatEvent } from './index'

export type ChatEventsUnion = ChatEvents

/** Contains a list of chat events */
export interface ChatEvents {
  _: 'chatEvents'
  /** List of events */
  events: ChatEvent[]
}
