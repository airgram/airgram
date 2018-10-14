
export interface ChatParticipant {
  _: 'chatParticipant'
  user_id: number
  inviter_id: number
  date: number
}

export interface ChatParticipantAdmin {
  _: 'chatParticipantAdmin'
  user_id: number
  inviter_id: number
  date: number
}

export interface ChatParticipantCreator {
  _: 'chatParticipantCreator'
  user_id: number
}

export type ChatParticipantUnion = ChatParticipant
  | ChatParticipantAdmin
  | ChatParticipantCreator
