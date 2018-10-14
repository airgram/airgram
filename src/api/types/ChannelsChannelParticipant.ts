import { ChannelParticipantUnion } from './ChannelParticipant'
import { UserUnion } from './User'

export interface ChannelsChannelParticipant {
  _: 'channels.channelParticipant'
  participant: ChannelParticipantUnion
  users: UserUnion[]
}

export type ChannelsChannelParticipantUnion = ChannelsChannelParticipant
