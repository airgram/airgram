import { ChannelAdminRightsUnion } from './ChannelAdminRights'
import { ChannelBannedRightsUnion } from './ChannelBannedRights'

export interface ChannelParticipant {
  _: 'channelParticipant'
  user_id: number
  date: number
}

export interface ChannelParticipantAdmin {
  _: 'channelParticipantAdmin'
  flags: number
  can_edit?: true
  user_id: number
  inviter_id: number
  promoted_by: number
  date: number
  admin_rights: ChannelAdminRightsUnion
}

export interface ChannelParticipantBanned {
  _: 'channelParticipantBanned'
  flags: number
  left?: true
  user_id: number
  kicked_by: number
  date: number
  banned_rights: ChannelBannedRightsUnion
}

export interface ChannelParticipantCreator {
  _: 'channelParticipantCreator'
  user_id: number
}

export interface ChannelParticipantSelf {
  _: 'channelParticipantSelf'
  user_id: number
  inviter_id: number
  date: number
}

export type ChannelParticipantUnion = ChannelParticipant
  | ChannelParticipantAdmin
  | ChannelParticipantBanned
  | ChannelParticipantCreator
  | ChannelParticipantSelf
