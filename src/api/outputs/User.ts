import {
  LinkStateUnion,
  ProfilePhoto,
  UserStatusUnion,
  UserTypeUnion
} from './index'

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
  /** Relationship from the current user to the other user */
  outgoingLink: LinkStateUnion
  /** Relationship from the other user to the current user */
  incomingLink: LinkStateUnion
  /** True, if the user is verified */
  isVerified: boolean
  /**
   * If non-empty, it contains the reason why access to this user must be restricted.
   * The format of the string is "{type}: {description}". {type} contains the type of
   * the restriction and at least one of the suffixes "-all", "-ios", "-android", or "-wp",
   * which describe the platforms on which access should be restricted. (For example,
   * "terms-ios-android". {description} contains a human-readable description of the restriction,
   * which can be shown to the user)
   */
  restrictionReason: string
  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. It can't be passed to any method except GetUser
   */
  haveAccess: boolean
  /** Type of the user */
  type: UserTypeUnion
  /** IETF language tag of the user's language; only available to bots */
  languageCode: string
}
