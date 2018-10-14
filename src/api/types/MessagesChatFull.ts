import { ChatUnion } from './Chat'
import { ChatFullUnion } from './ChatFull'
import { UserUnion } from './User'

export interface MessagesChatFull {
  _: 'messages.chatFull'
  full_chat: ChatFullUnion
  chats: ChatUnion[]
  users: UserUnion[]
}

export type MessagesChatFullUnion = MessagesChatFull
