/** Describes the type of a chat */
export type ChatTypeUnion = ChatTypePrivate
  | ChatTypeBasicGroup
  | ChatTypeSupergroup
  | ChatTypeSecret

/** An ordinary chat with a user */
export interface ChatTypePrivate {
  _: 'chatTypePrivate'
  /** User identifier */
  userId: number
}

/** A basic group (a chat with 0-200 other users) */
export interface ChatTypeBasicGroup {
  _: 'chatTypeBasicGroup'
  /** Basic group identifier */
  basicGroupId: number
}

/** A supergroup or channel (with unlimited members) */
export interface ChatTypeSupergroup {
  _: 'chatTypeSupergroup'
  /** Supergroup or channel identifier */
  supergroupId: number
  /** True, if the supergroup is a channel */
  isChannel: boolean
}

/** A secret chat with a user */
export interface ChatTypeSecret {
  _: 'chatTypeSecret'
  /** Secret chat identifier */
  secretChatId: number
  /** User identifier of the secret chat peer */
  userId: number
}
