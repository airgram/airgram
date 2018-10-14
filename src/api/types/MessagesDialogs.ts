import { ChatUnion } from './Chat'
import { DialogUnion } from './Dialog'
import { MessageUnion } from './Message'
import { UserUnion } from './User'

export interface MessagesDialogs {
  _: 'messages.dialogs'
  dialogs: DialogUnion[]
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export interface MessagesDialogsSlice {
  _: 'messages.dialogsSlice'
  count: number
  dialogs: DialogUnion[]
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export type MessagesDialogsUnion = MessagesDialogs
  | MessagesDialogsSlice
