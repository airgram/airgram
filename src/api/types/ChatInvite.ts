import { ChatUnion } from './Chat'
import { ChatPhotoUnion } from './ChatPhoto'
import { UserUnion } from './User'

export interface ChatInvite {
  _: 'chatInvite'
  flags: number
  channel?: true
  broadcast?: true
  public?: true
  megagroup?: true
  title: string
  photo: ChatPhotoUnion
  participants_count: number
  participants?: UserUnion[]
}

export interface ChatInviteAlready {
  _: 'chatInviteAlready'
  chat: ChatUnion
}

export type ChatInviteUnion = ChatInvite
  | ChatInviteAlready
