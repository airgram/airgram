import { ChatUnion } from './Chat'
import { MessageUnion } from './Message'
import { UpdateUnion } from './Update'
import { UserUnion } from './User'

export interface UpdatesChannelDifference {
  _: 'updates.channelDifference'
  flags: number
  final?: true
  pts: number
  timeout?: number
  new_messages: MessageUnion[]
  other_updates: UpdateUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export interface UpdatesChannelDifferenceEmpty {
  _: 'updates.channelDifferenceEmpty'
  flags: number
  final?: true
  pts: number
  timeout?: number
}

export interface UpdatesChannelDifferenceTooLong {
  _: 'updates.channelDifferenceTooLong'
  flags: number
  final?: true
  pts: number
  timeout?: number
  top_message: number
  read_inbox_max_id: number
  read_outbox_max_id: number
  unread_count: number
  unread_mentions_count: number
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export type UpdatesChannelDifferenceUnion = UpdatesChannelDifference
  | UpdatesChannelDifferenceEmpty
  | UpdatesChannelDifferenceTooLong
