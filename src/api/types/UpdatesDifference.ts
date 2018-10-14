import { ChatUnion } from './Chat'
import { EncryptedMessageUnion } from './EncryptedMessage'
import { MessageUnion } from './Message'
import { UpdateUnion } from './Update'
import { UpdatesStateUnion } from './UpdatesState'
import { UserUnion } from './User'

export interface UpdatesDifference {
  _: 'updates.difference'
  new_messages: MessageUnion[]
  new_encrypted_messages: EncryptedMessageUnion[]
  other_updates: UpdateUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
  state: UpdatesStateUnion
}

export interface UpdatesDifferenceEmpty {
  _: 'updates.differenceEmpty'
  date: number
  seq: number
}

export interface UpdatesDifferenceSlice {
  _: 'updates.differenceSlice'
  new_messages: MessageUnion[]
  new_encrypted_messages: EncryptedMessageUnion[]
  other_updates: UpdateUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
  intermediate_state: UpdatesStateUnion
}

export interface UpdatesDifferenceTooLong {
  _: 'updates.differenceTooLong'
  pts: number
}

export type UpdatesDifferenceUnion = UpdatesDifference
  | UpdatesDifferenceEmpty
  | UpdatesDifferenceSlice
  | UpdatesDifferenceTooLong
