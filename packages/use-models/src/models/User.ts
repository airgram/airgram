import { ProfilePhoto, UserStatusUnion, UserTypeUnion } from '@airgram/core'

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

  /** The user is a contact of the current user */
  public isContact: boolean

  /**
   * The user is a contact of the current user and the current user is a contact of the
   * user
   */
  public isMutualContact: boolean

  /** True, if the user is verified */
  public isVerified: boolean

  /** True, if the user is Telegram support account */
  public isSupport: boolean

  /**
   * If non-empty, it contains a human-readable description of the reason why access to
   * this user must be restricted
   */
  public restrictionReason: string

  /** True, if many users reported this user as a scam */
  public isScam: boolean

  /** True, if many users reported this user as a fake account */
  public isFake: boolean

  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. Identifier of the user can't be passed to any method except
   * GetUser
   */
  public haveAccess: boolean

  /** Type of the user */
  public type: UserTypeUnion

  /** IETF language tag of the user's language; only available to bots */
  public languageCode: string
}
