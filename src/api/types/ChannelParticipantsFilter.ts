
export interface ChannelParticipantsAdmins {
  _: 'channelParticipantsAdmins'
}

export interface ChannelParticipantsBanned {
  _: 'channelParticipantsBanned'
  q: string
}

export interface ChannelParticipantsBots {
  _: 'channelParticipantsBots'
}

export interface ChannelParticipantsKicked {
  _: 'channelParticipantsKicked'
  q: string
}

export interface ChannelParticipantsRecent {
  _: 'channelParticipantsRecent'
}

export interface ChannelParticipantsSearch {
  _: 'channelParticipantsSearch'
  q: string
}

export type ChannelParticipantsFilterUnion = ChannelParticipantsAdmins
  | ChannelParticipantsBanned
  | ChannelParticipantsBots
  | ChannelParticipantsKicked
  | ChannelParticipantsRecent
  | ChannelParticipantsSearch
