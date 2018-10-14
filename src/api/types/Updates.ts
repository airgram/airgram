import { ChatUnion } from './Chat'
import { MessageEntityUnion } from './MessageEntity'
import { MessageFwdHeaderUnion } from './MessageFwdHeader'
import { MessageMediaUnion } from './MessageMedia'
import { UpdateUnion } from './Update'
import { UserUnion } from './User'

export interface UpdateShort {
  _: 'updateShort'
  update: UpdateUnion
  date: number
}

export interface UpdateShortChatMessage {
  _: 'updateShortChatMessage'
  flags: number
  out?: true
  mentioned?: true
  media_unread?: true
  silent?: true
  id: number
  from_id: number
  chat_id: number
  message: string
  pts: number
  pts_count: number
  date: number
  fwd_from?: MessageFwdHeaderUnion
  via_bot_id?: number
  reply_to_msg_id?: number
  entities?: MessageEntityUnion[]
}

export interface UpdateShortMessage {
  _: 'updateShortMessage'
  flags: number
  out?: true
  mentioned?: true
  media_unread?: true
  silent?: true
  id: number
  user_id: number
  message: string
  pts: number
  pts_count: number
  date: number
  fwd_from?: MessageFwdHeaderUnion
  via_bot_id?: number
  reply_to_msg_id?: number
  entities?: MessageEntityUnion[]
}

export interface UpdateShortSentMessage {
  _: 'updateShortSentMessage'
  flags: number
  out?: true
  id: number
  pts: number
  pts_count: number
  date: number
  media?: MessageMediaUnion
  entities?: MessageEntityUnion[]
}

export interface Updates {
  _: 'updates'
  updates: UpdateUnion[]
  users: UserUnion[]
  chats: ChatUnion[]
  date: number
  seq: number
}

export interface UpdatesCombined {
  _: 'updatesCombined'
  updates: UpdateUnion[]
  users: UserUnion[]
  chats: ChatUnion[]
  date: number
  seq_start: number
  seq: number
}

export interface UpdatesTooLong {
  _: 'updatesTooLong'
}

export type UpdatesUnion = UpdateShort
  | UpdateShortChatMessage
  | UpdateShortMessage
  | UpdateShortSentMessage
  | Updates
  | UpdatesCombined
  | UpdatesTooLong
