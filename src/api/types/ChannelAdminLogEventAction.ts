import { ChannelParticipantUnion } from './ChannelParticipant'
import { ChatPhotoUnion } from './ChatPhoto'
import { InputStickerSetUnion } from './InputStickerSet'
import { MessageUnion } from './Message'

export interface ChannelAdminLogEventActionChangeAbout {
  _: 'channelAdminLogEventActionChangeAbout'
  prev_value: string
  new_value: string
}

export interface ChannelAdminLogEventActionChangePhoto {
  _: 'channelAdminLogEventActionChangePhoto'
  prev_photo: ChatPhotoUnion
  new_photo: ChatPhotoUnion
}

export interface ChannelAdminLogEventActionChangeStickerSet {
  _: 'channelAdminLogEventActionChangeStickerSet'
  prev_stickerset: InputStickerSetUnion
  new_stickerset: InputStickerSetUnion
}

export interface ChannelAdminLogEventActionChangeTitle {
  _: 'channelAdminLogEventActionChangeTitle'
  prev_value: string
  new_value: string
}

export interface ChannelAdminLogEventActionChangeUsername {
  _: 'channelAdminLogEventActionChangeUsername'
  prev_value: string
  new_value: string
}

export interface ChannelAdminLogEventActionDeleteMessage {
  _: 'channelAdminLogEventActionDeleteMessage'
  message: MessageUnion
}

export interface ChannelAdminLogEventActionEditMessage {
  _: 'channelAdminLogEventActionEditMessage'
  prev_message: MessageUnion
  new_message: MessageUnion
}

export interface ChannelAdminLogEventActionParticipantInvite {
  _: 'channelAdminLogEventActionParticipantInvite'
  participant: ChannelParticipantUnion
}

export interface ChannelAdminLogEventActionParticipantJoin {
  _: 'channelAdminLogEventActionParticipantJoin'
}

export interface ChannelAdminLogEventActionParticipantLeave {
  _: 'channelAdminLogEventActionParticipantLeave'
}

export interface ChannelAdminLogEventActionParticipantToggleAdmin {
  _: 'channelAdminLogEventActionParticipantToggleAdmin'
  prev_participant: ChannelParticipantUnion
  new_participant: ChannelParticipantUnion
}

export interface ChannelAdminLogEventActionParticipantToggleBan {
  _: 'channelAdminLogEventActionParticipantToggleBan'
  prev_participant: ChannelParticipantUnion
  new_participant: ChannelParticipantUnion
}

export interface ChannelAdminLogEventActionToggleInvites {
  _: 'channelAdminLogEventActionToggleInvites'
  new_value: boolean
}

export interface ChannelAdminLogEventActionToggleSignatures {
  _: 'channelAdminLogEventActionToggleSignatures'
  new_value: boolean
}

export interface ChannelAdminLogEventActionUpdatePinned {
  _: 'channelAdminLogEventActionUpdatePinned'
  message: MessageUnion
}

export type ChannelAdminLogEventActionUnion = ChannelAdminLogEventActionChangeAbout
  | ChannelAdminLogEventActionChangePhoto
  | ChannelAdminLogEventActionChangeStickerSet
  | ChannelAdminLogEventActionChangeTitle
  | ChannelAdminLogEventActionChangeUsername
  | ChannelAdminLogEventActionDeleteMessage
  | ChannelAdminLogEventActionEditMessage
  | ChannelAdminLogEventActionParticipantInvite
  | ChannelAdminLogEventActionParticipantJoin
  | ChannelAdminLogEventActionParticipantLeave
  | ChannelAdminLogEventActionParticipantToggleAdmin
  | ChannelAdminLogEventActionParticipantToggleBan
  | ChannelAdminLogEventActionToggleInvites
  | ChannelAdminLogEventActionToggleSignatures
  | ChannelAdminLogEventActionUpdatePinned
