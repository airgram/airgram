import { UserProfilePhotoUnion } from './UserProfilePhoto'
import { UserStatusUnion } from './UserStatus'

export interface User {
  _: 'user'
  flags: number
  self?: true
  contact?: true
  mutual_contact?: true
  deleted?: true
  bot?: true
  bot_chat_history?: true
  bot_nochats?: true
  verified?: true
  restricted?: true
  min?: true
  bot_inline_geo?: true
  id: number
  access_hash?: string
  first_name?: string
  last_name?: string
  username?: string
  phone?: string
  photo?: UserProfilePhotoUnion
  status?: UserStatusUnion
  bot_info_version?: number
  restriction_reason?: string
  bot_inline_placeholder?: string
  lang_code?: string
}

export interface UserEmpty {
  _: 'userEmpty'
  id: number
}

export type UserUnion = User
  | UserEmpty
