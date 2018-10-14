import { ChannelParticipantUnion } from './ChannelParticipant'
import { UserUnion } from './User'

export interface ChannelsChannelParticipants {
  _: 'channels.channelParticipants'
  count: number
  participants: ChannelParticipantUnion[]
  users: UserUnion[]
}

export type ChannelsChannelParticipantsUnion = ChannelsChannelParticipants
