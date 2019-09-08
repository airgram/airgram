import { ChatPermissionsInput } from './index'

/** Provides information about the status of a member in a chat */
export type ChatMemberStatusInputUnion = ChatMemberStatusCreatorInput
  | ChatMemberStatusAdministratorInput
  | ChatMemberStatusMemberInput
  | ChatMemberStatusRestrictedInput
  | ChatMemberStatusLeftInput
  | ChatMemberStatusBannedInput

/** The user is the creator of a chat and has all the administrator privileges */
export interface ChatMemberStatusCreatorInput {
  _: 'chatMemberStatusCreator'
  /** True, if the user is a member of the chat */
  isMember?: boolean
}

/**
 * The user is a member of a chat and has some additional privileges. In basic groups,
 * administrators can edit and delete messages sent by others, add new members, and
 * ban unprivileged members. In supergroups and channels, there are more detailed options
 * for administrator privileges
 */
export interface ChatMemberStatusAdministratorInput {
  _: 'chatMemberStatusAdministrator'
  /** True, if the current user can edit the administrator privileges for the called user */
  canBeEdited?: boolean
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
  /** True, if the administrator can restrict, ban, or unban chat members */
  canRestrictMembers?: boolean
  /** True, if the administrator can pin messages; applicable to groups only */
  canPinMessages?: boolean
  /**
   * True, if the administrator can add new administrators with a subset of their own
   * privileges or demote administrators that were directly or indirectly promoted by
   * him
   */
  canPromoteMembers?: boolean
}

/** The user is a member of a chat, without any additional privileges or restrictions */
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

/** The user is not a chat member */
export interface ChatMemberStatusLeftInput {
  _: 'chatMemberStatusLeft'
}

/**
 * The user was banned (and hence is not a member of the chat). Implies the user can't
 * return to the chat or view messages
 */
export interface ChatMemberStatusBannedInput {
  _: 'chatMemberStatusBanned'
  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever
   */
  bannedUntilDate?: number
}
