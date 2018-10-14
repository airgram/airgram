import { ChannelAdminRightsUnion } from './ChannelAdminRights'
import { ChannelBannedRightsUnion } from './ChannelBannedRights'
import { ChatPhotoUnion } from './ChatPhoto'
import { InputChannelUnion } from './InputChannel'

export interface Channel {
  _: 'channel'
  flags: number
  creator?: true
  left?: true
  editor?: true
  broadcast?: true
  verified?: true
  megagroup?: true
  restricted?: true
  democracy?: true
  signatures?: true
  min?: true
  id: number
  access_hash?: number
  title: string
  username?: string
  photo: ChatPhotoUnion
  date: number
  version: number
  restriction_reason?: string
  admin_rights?: ChannelAdminRightsUnion
  banned_rights?: ChannelBannedRightsUnion
}

export interface ChannelForbidden {
  _: 'channelForbidden'
  flags: number
  broadcast?: true
  megagroup?: true
  id: number
  access_hash: number
  title: string
  until_date?: number
}

export interface Chat {
  _: 'chat'
  flags: number
  creator?: true
  kicked?: true
  left?: true
  admins_enabled?: true
  admin?: true
  deactivated?: true
  id: number
  title: string
  photo: ChatPhotoUnion
  participants_count: number
  date: number
  version: number
  migrated_to?: InputChannelUnion
}

export interface ChatEmpty {
  _: 'chatEmpty'
  id: number
}

export interface ChatForbidden {
  _: 'chatForbidden'
  id: number
  title: string
}

export type ChatUnion = Channel
  | ChannelForbidden
  | Chat
  | ChatEmpty
  | ChatForbidden
