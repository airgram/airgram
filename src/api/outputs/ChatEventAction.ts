import { ChatMemberStatusUnion, ChatPhoto, Message } from './index'

/** Represents a chat event */
export type ChatEventActionUnion = ChatEventMessageEdited
  | ChatEventMessageDeleted
  | ChatEventMessagePinned
  | ChatEventMessageUnpinned
  | ChatEventMemberJoined
  | ChatEventMemberLeft
  | ChatEventMemberInvited
  | ChatEventMemberPromoted
  | ChatEventMemberRestricted
  | ChatEventTitleChanged
  | ChatEventDescriptionChanged
  | ChatEventUsernameChanged
  | ChatEventPhotoChanged
  | ChatEventInvitesToggled
  | ChatEventSignMessagesToggled
  | ChatEventStickerSetChanged
  | ChatEventIsAllHistoryAvailableToggled

/** A message was edited */
export interface ChatEventMessageEdited {
  _: 'chatEventMessageEdited'
  /** The original message before the edit */
  oldMessage: Message
  /** The message after it was edited */
  newMessage: Message
}

/** A message was deleted */
export interface ChatEventMessageDeleted {
  _: 'chatEventMessageDeleted'
  /** Deleted message */
  message: Message
}

/** A message was pinned */
export interface ChatEventMessagePinned {
  _: 'chatEventMessagePinned'
  /** Pinned message */
  message: Message
}

/** A message was unpinned */
export interface ChatEventMessageUnpinned {
  _: 'chatEventMessageUnpinned'
}

/** A new member joined the chat */
export interface ChatEventMemberJoined {
  _: 'chatEventMemberJoined'
}

/** A member left the chat */
export interface ChatEventMemberLeft {
  _: 'chatEventMemberLeft'
}

/** A new chat member was invited */
export interface ChatEventMemberInvited {
  _: 'chatEventMemberInvited'
  /** New member user identifier */
  userId: number
  /** New member status */
  status: ChatMemberStatusUnion
}

/**
 * A chat member has gained/lost administrator status, or the list of their administrator
 * privileges has changed
 */
export interface ChatEventMemberPromoted {
  _: 'chatEventMemberPromoted'
  /** Chat member user identifier */
  userId: number
  /** Previous status of the chat member */
  oldStatus: ChatMemberStatusUnion
  /** New status of the chat member */
  newStatus: ChatMemberStatusUnion
}

/**
 * A chat member was restricted/unrestricted or banned/unbanned, or the list of their
 * restrictions has changed
 */
export interface ChatEventMemberRestricted {
  _: 'chatEventMemberRestricted'
  /** Chat member user identifier */
  userId: number
  /** Previous status of the chat member */
  oldStatus: ChatMemberStatusUnion
  /** New status of the chat member */
  newStatus: ChatMemberStatusUnion
}

/** The chat title was changed */
export interface ChatEventTitleChanged {
  _: 'chatEventTitleChanged'
  /** Previous chat title */
  oldTitle: string
  /** New chat title */
  newTitle: string
}

/** The chat description was changed */
export interface ChatEventDescriptionChanged {
  _: 'chatEventDescriptionChanged'
  /** Previous chat description */
  oldDescription: string
  /** New chat description */
  newDescription: string
}

/** The chat username was changed */
export interface ChatEventUsernameChanged {
  _: 'chatEventUsernameChanged'
  /** Previous chat username */
  oldUsername: string
  /** New chat username */
  newUsername: string
}

/** The chat photo was changed */
export interface ChatEventPhotoChanged {
  _: 'chatEventPhotoChanged'
  /** Previous chat photo value; may be null */
  oldPhoto?: ChatPhoto
  /** New chat photo value; may be null */
  newPhoto?: ChatPhoto
}

/** The anyone_can_invite setting of a supergroup chat was toggled */
export interface ChatEventInvitesToggled {
  _: 'chatEventInvitesToggled'
  /** New value of anyone_can_invite */
  anyoneCanInvite: boolean
}

/** The sign_messages setting of a channel was toggled */
export interface ChatEventSignMessagesToggled {
  _: 'chatEventSignMessagesToggled'
  /** New value of sign_messages */
  signMessages: boolean
}

/** The supergroup sticker set was changed */
export interface ChatEventStickerSetChanged {
  _: 'chatEventStickerSetChanged'
  /** Previous identifier of the chat sticker set; 0 if none */
  oldStickerSetId: number | string
  /** New identifier of the chat sticker set; 0 if none */
  newStickerSetId: number | string
}

/** The is_all_history_available setting of a supergroup was toggled */
export interface ChatEventIsAllHistoryAvailableToggled {
  _: 'chatEventIsAllHistoryAvailableToggled'
  /** New value of is_all_history_available */
  isAllHistoryAvailable: boolean
}
