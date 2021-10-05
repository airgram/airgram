import { ChatPermissionsInput } from './index'

/** Provides information about the status of a member in a chat */
export type ChatMemberStatusInputUnion = ChatMemberStatusCreatorInput
  | ChatMemberStatusAdministratorInput
  | ChatMemberStatusMemberInput
  | ChatMemberStatusRestrictedInput
  | ChatMemberStatusLeftInput
  | ChatMemberStatusBannedInput

/** The user is the owner of the chat and has all the administrator privileges */
export interface ChatMemberStatusCreatorInput {
  _: 'chatMemberStatusCreator'
  /**
   * A custom title of the owner; 0-16 characters without emojis; applicable to supergroups
   * only
   */
  customTitle?: string
  /**
   * True, if the creator isn't shown in the chat member list and sends messages anonymously;
   * applicable to supergroups only
   */
  isAnonymous?: boolean
  /** True, if the user is a member of the chat */
  isMember?: boolean
}

/**
 * The user is a member of the chat and has some additional privileges. In basic groups,
 * administrators can edit and delete messages sent by others, add new members, ban
 * unprivileged members, and manage voice chats. In supergroups and channels, there
 * are more detailed options for administrator privileges
 */
export interface ChatMemberStatusAdministratorInput {
  _: 'chatMemberStatusAdministrator'
  /**
   * A custom title of the administrator; 0-16 characters without emojis; applicable to
   * supergroups only
   */
  customTitle?: string
  /** True, if the current user can edit the administrator privileges for the called user */
  canBeEdited?: boolean
  /**
   * True, if the administrator can get chat event log, get chat statistics, get message
   * statistics in channels, get channel members, see anonymous administrators in supergroups
   * and ignore slow mode. Implied by any other privilege; applicable to supergroups and
   * channels only
   */
  canManageChat?: boolean
  /** True, if the administrator can change the chat title, photo, and other settings */
  canChangeInfo?: boolean
  /** True, if the administrator can create channel posts; applicable to channels only */
  canPostMessages?: boolean
  /**
   * True, if the administrator can edit messages of other users and pin messages; applicable
   * to channels only
   */
  canEditMessages?: boolean
  /** True, if the administrator can delete messages of other users */
  canDeleteMessages?: boolean
  /** True, if the administrator can invite new users to the chat */
  canInviteUsers?: boolean
  /**
   * True, if the administrator can restrict, ban, or unban chat members; always true
   * for channels
   */
  canRestrictMembers?: boolean
  /**
   * True, if the administrator can pin messages; applicable to basic groups and supergroups
   * only
   */
  canPinMessages?: boolean
  /**
   * True, if the administrator can add new administrators with a subset of their own
   * privileges or demote administrators that were directly or indirectly promoted by
   * them
   */
  canPromoteMembers?: boolean
  /** True, if the administrator can manage voice chats */
  canManageVoiceChats?: boolean
  /**
   * True, if the administrator isn't shown in the chat member list and sends messages
   * anonymously; applicable to supergroups only
   */
  isAnonymous?: boolean
}

/** The user is a member of the chat, without any additional privileges or restrictions */
export interface ChatMemberStatusMemberInput {
  _: 'chatMemberStatusMember'
}

/**
 * The user is under certain restrictions in the chat. Not supported in basic groups
 * and channels
 */
export interface ChatMemberStatusRestrictedInput {
  _: 'chatMemberStatusRestricted'
  /** True, if the user is a member of the chat */
  isMember?: boolean
  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  restrictedUntilDate?: number
  /** User permissions in the chat */
  permissions?: ChatPermissionsInput
}

/** The user or the chat is not a chat member */
export interface ChatMemberStatusLeftInput {
  _: 'chatMemberStatusLeft'
}

/**
 * The user or the chat was banned (and hence is not a member of the chat). Implies
 * the user can't return to the chat, view messages, or be used as a participant identifier
 * to join a voice chat of the chat
 */
export interface ChatMemberStatusBannedInput {
  _: 'chatMemberStatusBanned'
  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever. Always 0 in basic groups
   */
  bannedUntilDate?: number
}
