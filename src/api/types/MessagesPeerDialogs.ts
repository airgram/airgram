import { ChatUnion } from './Chat'
import { DialogUnion } from './Dialog'
import { MessageUnion } from './Message'
import { UpdatesStateUnion } from './UpdatesState'
import { UserUnion } from './User'

export interface MessagesPeerDialogs {
  _: 'messages.peerDialogs'
  dialogs: DialogUnion[]
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
  state: UpdatesStateUnion
}

export type MessagesPeerDialogsUnion = MessagesPeerDialogs
