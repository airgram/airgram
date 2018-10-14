import { BotInfoUnion } from './BotInfo'
import { ContactsLinkUnion } from './ContactsLink'
import { PeerNotifySettingsUnion } from './PeerNotifySettings'
import { PhotoUnion } from './Photo'
import { UserUnion } from './User'

export interface UserFull {
  _: 'userFull'
  flags: number
  blocked?: true
  phone_calls_available?: true
  phone_calls_private?: true
  user: UserUnion
  about?: string
  link: ContactsLinkUnion
  profile_photo?: PhotoUnion
  notify_settings: PeerNotifySettingsUnion
  bot_info?: BotInfoUnion
  common_chats_count: number
}

export type UserFullUnion = UserFull
