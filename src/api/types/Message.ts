import { MessageActionUnion } from './MessageAction'
import { MessageEntityUnion } from './MessageEntity'
import { MessageFwdHeaderUnion } from './MessageFwdHeader'
import { MessageMediaUnion } from './MessageMedia'
import { PeerUnion } from './Peer'
import { ReplyMarkupUnion } from './ReplyMarkup'

export interface Message {
  _: 'message'
  flags: number
  out?: true
  mentioned?: true
  media_unread?: true
  silent?: true
  post?: true
  id: number
  from_id?: number
  to_id: PeerUnion
  fwd_from?: MessageFwdHeaderUnion
  via_bot_id?: number
  reply_to_msg_id?: number
  date: number
  message: string
  media?: MessageMediaUnion
  reply_markup?: ReplyMarkupUnion
  entities?: MessageEntityUnion[]
  views?: number
  edit_date?: number
  post_author?: string
}

export interface MessageEmpty {
  _: 'messageEmpty'
  id: number
}

export interface MessageService {
  _: 'messageService'
  flags: number
  out?: true
  mentioned?: true
  media_unread?: true
  silent?: true
  post?: true
  id: number
  from_id?: number
  to_id: PeerUnion
  reply_to_msg_id?: number
  date: number
  action: MessageActionUnion
}

export type MessageUnion = Message
  | MessageEmpty
  | MessageService
