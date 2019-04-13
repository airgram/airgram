import { ChatInviteLinkInfo } from './index'

/** Describes the type of a URL linking to an internal Telegram entity */
export type TMeUrlTypeUnion = TMeUrlTypeUser
  | TMeUrlTypeSupergroup
  | TMeUrlTypeChatInvite
  | TMeUrlTypeStickerSet

/** A URL linking to a user */
export interface TMeUrlTypeUser {
  _: 'tMeUrlTypeUser'
  /** Identifier of the user */
  userId: number
}

/** A URL linking to a public supergroup or channel */
export interface TMeUrlTypeSupergroup {
  _: 'tMeUrlTypeSupergroup'
  /** Identifier of the supergroup or channel */
  supergroupId: number
}

/** A chat invite link */
export interface TMeUrlTypeChatInvite {
  _: 'tMeUrlTypeChatInvite'
  /** Chat invite link info */
  info: ChatInviteLinkInfo
}

/** A URL linking to a sticker set */
export interface TMeUrlTypeStickerSet {
  _: 'tMeUrlTypeStickerSet'
  /** Identifier of the sticker set */
  stickerSetId: number | string
}
