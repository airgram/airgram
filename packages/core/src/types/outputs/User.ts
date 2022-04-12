import { ProfilePhoto, UserStatusUnion, UserTypeUnion } from './index'

export type UserUnion = User

/** Represents a user */
export interface User {
  _: 'user'
  /** User identifier */
  id: number
  /** First name of the user */
  firstName: string
  /** Last name of the user */
  lastName: string
  /** Username of the user */
  username: string
  /** Phone number of the user */
  phoneNumber: string
  /** Current online status of the user */
  status: UserStatusUnion
  /** Profile photo of the user; may be null */
  profilePhoto?: ProfilePhoto
  /** The user is a contact of the current user */
  isContact: boolean
  /**
   * The user is a contact of the current user and the current user is a contact of the
   * user
   */
  isMutualContact: boolean
  /** True, if the user is verified */
  isVerified: boolean
  /** True, if the user is Telegram support account */
  isSupport: boolean
  /**
   * If non-empty, it contains a human-readable description of the reason why access to
   * this user must be restricted
   */
  restrictionReason: string
  /** True, if many users reported this user as a scam */
  isScam: boolean
  /** True, if many users reported this user as a fake account */
  isFake: boolean
  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. Identifier of the user can't be passed to any method except
   * GetUser
   */
  haveAccess: boolean
  /** Type of the user */
  type: UserTypeUnion
  /** IETF language tag of the user's language; only available to bots */
  languageCode: string
}
