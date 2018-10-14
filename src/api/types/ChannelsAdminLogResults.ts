import { ChannelAdminLogEventUnion } from './ChannelAdminLogEvent'
import { ChatUnion } from './Chat'
import { UserUnion } from './User'

export interface ChannelsAdminLogResults {
  _: 'channels.adminLogResults'
  events: ChannelAdminLogEventUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export type ChannelsAdminLogResultsUnion = ChannelsAdminLogResults
