import { BotInfoUnion } from './BotInfo'
import { ChatParticipantsUnion } from './ChatParticipants'
import { ExportedChatInviteUnion } from './ExportedChatInvite'
import { PeerNotifySettingsUnion } from './PeerNotifySettings'
import { PhotoUnion } from './Photo'
import { StickerSetUnion } from './StickerSet'

export interface ChannelFull {
  _: 'channelFull'
  flags: number
  can_view_participants?: true
  can_set_username?: true
  can_set_stickers?: true
  id: number
  about: string
  participants_count?: number
  admins_count?: number
  kicked_count?: number
  banned_count?: number
  read_inbox_max_id: number
  read_outbox_max_id: number
  unread_count: number
  chat_photo: PhotoUnion
  notify_settings: PeerNotifySettingsUnion
  exported_invite: ExportedChatInviteUnion
  bot_info: BotInfoUnion[]
  migrated_from_chat_id?: number
  migrated_from_max_id?: number
  pinned_msg_id?: number
  stickerset?: StickerSetUnion
}

export interface ChatFull {
  _: 'chatFull'
  id: number
  participants: ChatParticipantsUnion
  chat_photo: PhotoUnion
  notify_settings: PeerNotifySettingsUnion
  exported_invite: ExportedChatInviteUnion
  bot_info: BotInfoUnion[]
}

export type ChatFullUnion = ChannelFull
  | ChatFull
