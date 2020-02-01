import {
  ChatLocation,
  ChatMemberStatusUnion,
  ChatPermissions,
  Message,
  Photo
} from './index'

/** Represents a chat event */
export type ChatEventActionUnion = ChatEventMessageEdited
  | ChatEventMessageDeleted
  | ChatEventPollStopped
  | ChatEventMessagePinned
  | ChatEventMessageUnpinned
  | ChatEventMemberJoined
  | ChatEventMemberLeft
  | ChatEventMemberInvited
  | ChatEventMemberPromoted
  | ChatEventMemberRestricted
  | ChatEventTitleChanged
  | ChatEventPermissionsChanged
  | ChatEventDescriptionChanged
  | ChatEventUsernameChanged
  | ChatEventPhotoChanged
  | ChatEventInvitesToggled
  | ChatEventLinkedChatChanged
  | ChatEventSlowModeDelayChanged
  | ChatEventSignMessagesToggled
  | ChatEventStickerSetChanged
  | ChatEventLocationChanged
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

/** A poll in a message was stopped */
export interface ChatEventPollStopped {
  _: 'chatEventPollStopped'
  /** The message with the poll */
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

/** The chat permissions was changed */
export interface ChatEventPermissionsChanged {
  _: 'chatEventPermissionsChanged'
  /** Previous chat permissions */
  oldPermissions: ChatPermissions
  /** New chat permissions */
  newPermissions: ChatPermissions
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
  oldPhoto?: Photo
  /** New chat photo value; may be null */
  newPhoto?: Photo
}

/** The can_invite_users permission of a supergroup chat was toggled */
export interface ChatEventInvitesToggled {
  _: 'chatEventInvitesToggled'
  /** New value of can_invite_users permission */
  canInviteUsers: boolean
}

/** The linked chat of a supergroup was changed */
export interface ChatEventLinkedChatChanged {
  _: 'chatEventLinkedChatChanged'
  /** Previous supergroup linked chat identifier */
  oldLinkedChatId: number
  /** New supergroup linked chat identifier */
  newLinkedChatId: number
}

/** The slow_mode_delay setting of a supergroup was changed */
export interface ChatEventSlowModeDelayChanged {
  _: 'chatEventSlowModeDelayChanged'
  /** Previous value of slow_mode_delay */
  oldSlowModeDelay: number
  /** New value of slow_mode_delay */
  newSlowModeDelay: number
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
  oldStickerSetId: string
  /** New identifier of the chat sticker set; 0 if none */
  newStickerSetId: string
}

/** The supergroup location was changed */
export interface ChatEventLocationChanged {
  _: 'chatEventLocationChanged'
  /** Previous location; may be null */
  oldLocation?: ChatLocation
  /** New location; may be null */
  newLocation?: ChatLocation
}

/** The is_all_history_available setting of a supergroup was toggled */
export interface ChatEventIsAllHistoryAvailableToggled {
  _: 'chatEventIsAllHistoryAvailableToggled'
  /** New value of is_all_history_available */
  isAllHistoryAvailable: boolean
}
