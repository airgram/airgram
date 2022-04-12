import {
  ChatInviteLink,
  ChatLocation,
  ChatMemberStatusUnion,
  ChatPermissions,
  ChatPhoto,
  Message,
  MessageSenderUnion
} from './index'

/** Represents a chat event */
export type ChatEventActionUnion = ChatEventMessageEdited
  | ChatEventMessageDeleted
  | ChatEventMessagePinned
  | ChatEventMessageUnpinned
  | ChatEventPollStopped
  | ChatEventMemberJoined
  | ChatEventMemberJoinedByInviteLink
  | ChatEventMemberJoinedByRequest
  | ChatEventMemberInvited
  | ChatEventMemberLeft
  | ChatEventMemberPromoted
  | ChatEventMemberRestricted
  | ChatEventAvailableReactionsChanged
  | ChatEventDescriptionChanged
  | ChatEventLinkedChatChanged
  | ChatEventLocationChanged
  | ChatEventMessageTtlChanged
  | ChatEventPermissionsChanged
  | ChatEventPhotoChanged
  | ChatEventSlowModeDelayChanged
  | ChatEventStickerSetChanged
  | ChatEventTitleChanged
  | ChatEventUsernameChanged
  | ChatEventHasProtectedContentToggled
  | ChatEventInvitesToggled
  | ChatEventIsAllHistoryAvailableToggled
  | ChatEventSignMessagesToggled
  | ChatEventInviteLinkEdited
  | ChatEventInviteLinkRevoked
  | ChatEventInviteLinkDeleted
  | ChatEventVideoChatCreated
  | ChatEventVideoChatEnded
  | ChatEventVideoChatMuteNewParticipantsToggled
  | ChatEventVideoChatParticipantIsMutedToggled
  | ChatEventVideoChatParticipantVolumeLevelChanged

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
  /** Unpinned message */
  message: Message
}

/** A poll in a message was stopped */
export interface ChatEventPollStopped {
  _: 'chatEventPollStopped'
  /** The message with the poll */
  message: Message
}

/** A new member joined the chat */
export interface ChatEventMemberJoined {
  _: 'chatEventMemberJoined'
}

/** A new member joined the chat via an invite link */
export interface ChatEventMemberJoinedByInviteLink {
  _: 'chatEventMemberJoinedByInviteLink'
  /** Invite link used to join the chat */
  inviteLink: ChatInviteLink
}

/** A new member was accepted to the chat by an administrator */
export interface ChatEventMemberJoinedByRequest {
  _: 'chatEventMemberJoinedByRequest'
  /** User identifier of the chat administrator, approved user join request */
  approverUserId: number
  /** Invite link used to join the chat; may be null */
  inviteLink?: ChatInviteLink
}

/** A new chat member was invited */
export interface ChatEventMemberInvited {
  _: 'chatEventMemberInvited'
  /** New member user identifier */
  userId: number
  /** New member status */
  status: ChatMemberStatusUnion
}

/** A member left the chat */
export interface ChatEventMemberLeft {
  _: 'chatEventMemberLeft'
}

/**
 * A chat member has gained/lost administrator status, or the list of their administrator
 * privileges has changed
 */
export interface ChatEventMemberPromoted {
  _: 'chatEventMemberPromoted'
  /** Affected chat member user identifier */
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
  /** Affected chat member identifier */
  memberId: MessageSenderUnion
  /** Previous status of the chat member */
  oldStatus: ChatMemberStatusUnion
  /** New status of the chat member */
  newStatus: ChatMemberStatusUnion
}

/** The chat available reactions were changed */
export interface ChatEventAvailableReactionsChanged {
  _: 'chatEventAvailableReactionsChanged'
  /** Previous chat available reactions */
  oldAvailableReactions: string[]
  /** New chat available reactions */
  newAvailableReactions: string[]
}

/** The chat description was changed */
export interface ChatEventDescriptionChanged {
  _: 'chatEventDescriptionChanged'
  /** Previous chat description */
  oldDescription: string
  /** New chat description */
  newDescription: string
}

/** The linked chat of a supergroup was changed */
export interface ChatEventLinkedChatChanged {
  _: 'chatEventLinkedChatChanged'
  /** Previous supergroup linked chat identifier */
  oldLinkedChatId: number
  /** New supergroup linked chat identifier */
  newLinkedChatId: number
}

/** The supergroup location was changed */
export interface ChatEventLocationChanged {
  _: 'chatEventLocationChanged'
  /** Previous location; may be null */
  oldLocation?: ChatLocation
  /** New location; may be null */
  newLocation?: ChatLocation
}

/** The message TTL was changed */
export interface ChatEventMessageTtlChanged {
  _: 'chatEventMessageTtlChanged'
  /** Previous value of message_ttl */
  oldMessageTtl: number
  /** New value of message_ttl */
  newMessageTtl: number
}

/** The chat permissions was changed */
export interface ChatEventPermissionsChanged {
  _: 'chatEventPermissionsChanged'
  /** Previous chat permissions */
  oldPermissions: ChatPermissions
  /** New chat permissions */
  newPermissions: ChatPermissions
}

/** The chat photo was changed */
export interface ChatEventPhotoChanged {
  _: 'chatEventPhotoChanged'
  /** Previous chat photo value; may be null */
  oldPhoto?: ChatPhoto
  /** New chat photo value; may be null */
  newPhoto?: ChatPhoto
}

/** The slow_mode_delay setting of a supergroup was changed */
export interface ChatEventSlowModeDelayChanged {
  _: 'chatEventSlowModeDelayChanged'
  /** Previous value of slow_mode_delay, in seconds */
  oldSlowModeDelay: number
  /** New value of slow_mode_delay, in seconds */
  newSlowModeDelay: number
}

/** The supergroup sticker set was changed */
export interface ChatEventStickerSetChanged {
  _: 'chatEventStickerSetChanged'
  /** Previous identifier of the chat sticker set; 0 if none */
  oldStickerSetId: string
  /** New identifier of the chat sticker set; 0 if none */
  newStickerSetId: string
}

/** The chat title was changed */
export interface ChatEventTitleChanged {
  _: 'chatEventTitleChanged'
  /** Previous chat title */
  oldTitle: string
  /** New chat title */
  newTitle: string
}

/** The chat username was changed */
export interface ChatEventUsernameChanged {
  _: 'chatEventUsernameChanged'
  /** Previous chat username */
  oldUsername: string
  /** New chat username */
  newUsername: string
}

/** The has_protected_content setting of a channel was toggled */
export interface ChatEventHasProtectedContentToggled {
  _: 'chatEventHasProtectedContentToggled'
  /** New value of has_protected_content */
  hasProtectedContent: boolean
}

/** The can_invite_users permission of a supergroup chat was toggled */
export interface ChatEventInvitesToggled {
  _: 'chatEventInvitesToggled'
  /** New value of can_invite_users permission */
  canInviteUsers: boolean
}

/** The is_all_history_available setting of a supergroup was toggled */
export interface ChatEventIsAllHistoryAvailableToggled {
  _: 'chatEventIsAllHistoryAvailableToggled'
  /** New value of is_all_history_available */
  isAllHistoryAvailable: boolean
}

/** The sign_messages setting of a channel was toggled */
export interface ChatEventSignMessagesToggled {
  _: 'chatEventSignMessagesToggled'
  /** New value of sign_messages */
  signMessages: boolean
}

/** A chat invite link was edited */
export interface ChatEventInviteLinkEdited {
  _: 'chatEventInviteLinkEdited'
  /** Previous information about the invite link */
  oldInviteLink: ChatInviteLink
  /** New information about the invite link */
  newInviteLink: ChatInviteLink
}

/** A chat invite link was revoked */
export interface ChatEventInviteLinkRevoked {
  _: 'chatEventInviteLinkRevoked'
  /** The invite link */
  inviteLink: ChatInviteLink
}

/** A revoked chat invite link was deleted */
export interface ChatEventInviteLinkDeleted {
  _: 'chatEventInviteLinkDeleted'
  /** The invite link */
  inviteLink: ChatInviteLink
}

/** A video chat was created */
export interface ChatEventVideoChatCreated {
  _: 'chatEventVideoChatCreated'
  /** Identifier of the video chat. The video chat can be received through the method getGroupCall */
  groupCallId: number
}

/** A video chat was ended */
export interface ChatEventVideoChatEnded {
  _: 'chatEventVideoChatEnded'
  /** Identifier of the video chat. The video chat can be received through the method getGroupCall */
  groupCallId: number
}

/** The mute_new_participants setting of a video chat was toggled */
export interface ChatEventVideoChatMuteNewParticipantsToggled {
  _: 'chatEventVideoChatMuteNewParticipantsToggled'
  /** New value of the mute_new_participants setting */
  muteNewParticipants: boolean
}

/** A video chat participant was muted or unmuted */
export interface ChatEventVideoChatParticipantIsMutedToggled {
  _: 'chatEventVideoChatParticipantIsMutedToggled'
  /** Identifier of the affected group call participant */
  participantId: MessageSenderUnion
  /** New value of is_muted */
  isMuted: boolean
}

/** A video chat participant volume level was changed */
export interface ChatEventVideoChatParticipantVolumeLevelChanged {
  _: 'chatEventVideoChatParticipantVolumeLevelChanged'
  /** Identifier of the affected group call participant */
  participantId: MessageSenderUnion
  /** New value of volume_level; 1-20000 in hundreds of percents */
  volumeLevel: number
}
