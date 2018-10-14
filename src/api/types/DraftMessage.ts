import { MessageEntityUnion } from './MessageEntity'

export interface DraftMessage {
  _: 'draftMessage'
  flags: number
  no_webpage?: true
  reply_to_msg_id?: number
  message: string
  entities?: MessageEntityUnion[]
  date: number
}

export interface DraftMessageEmpty {
  _: 'draftMessageEmpty'
}

export type DraftMessageUnion = DraftMessage
  | DraftMessageEmpty
