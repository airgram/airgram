import { ChatUnion } from './Chat'

export interface MessagesChats {
  _: 'messages.chats'
  chats: ChatUnion[]
}

export interface MessagesChatsSlice {
  _: 'messages.chatsSlice'
  count: number
  chats: ChatUnion[]
}

export type MessagesChatsUnion = MessagesChats
  | MessagesChatsSlice
