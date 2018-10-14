import { ChatUnion } from './Chat'
import { MessageUnion } from './Message'
import { UserUnion } from './User'

export interface MessagesChannelMessages {
  _: 'messages.channelMessages'
  flags: number
  pts: number
  count: number
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export interface MessagesMessages {
  _: 'messages.messages'
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export interface MessagesMessagesSlice {
  _: 'messages.messagesSlice'
  count: number
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export type MessagesMessagesUnion = MessagesChannelMessages
  | MessagesMessages
  | MessagesMessagesSlice
