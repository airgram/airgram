import { ChatParticipantUnion } from './ChatParticipant'

export interface ChatParticipants {
  _: 'chatParticipants'
  chat_id: number
  participants: ChatParticipantUnion[]
  version: number
}

export interface ChatParticipantsForbidden {
  _: 'chatParticipantsForbidden'
  flags: number
  chat_id: number
  self_participant?: ChatParticipantUnion
}

export type ChatParticipantsUnion = ChatParticipants
  | ChatParticipantsForbidden
