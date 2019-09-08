import {
  LinkStateUnion,
  ProfilePhoto,
  UserStatusUnion,
  UserTypeUnion
} from '@airgram/core'

/** Represents a user */
export class UserBaseModel {
  public _: 'user'

  /** User identifier */
  public id: number

  /** First name of the user */
  public firstName: string

  /** Last name of the user */
  public lastName: string

  /** Username of the user */
  public username: string

  /** Phone number of the user */
  public phoneNumber: string

  /** Current online status of the user */
  public status: UserStatusUnion

  /** Profile photo of the user; may be null */
  public profilePhoto?: ProfilePhoto

  /** Relationship from the current user to the other user */
  public outgoingLink: LinkStateUnion

  /** Relationship from the other user to the current user */
  public incomingLink: LinkStateUnion

  /** True, if the user is verified */
  public isVerified: boolean

  /** True, if the user is Telegram support account */
  public isSupport: boolean

  /**
   * If non-empty, it contains the reason why access to this user must be restricted.
   * The format of the string is "{type}: {description}". {type} contains the type of
   * the restriction and at least one of the suffixes "-all", "-ios", "-android", or "-wp",
   * which describe the platforms on which access should be restricted. (For example,
   * "terms-ios-android". {description} contains a human-readable description of the restriction,
   * which can be shown to the user)
   */
  public restrictionReason: string

  /** True, if many users reported this user as a scam */
  public isScam: boolean

  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. It can't be passed to any method except GetUser
   */
  public haveAccess: boolean

  /** Type of the user */
  public type: UserTypeUnion

  /** IETF language tag of the user's language; only available to bots */
  public languageCode: string
}
