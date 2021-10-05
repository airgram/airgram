/** Describes a chat administrator with a number of active and revoked chat invite links */
export class ChatInviteLinkCountBaseModel {
  public _: 'chatInviteLinkCount'

  /** Administrator's user identifier */
  public userId: number

  /** Number of active invite links */
  public inviteLinkCount: number

  /** Number of revoked invite links */
  public revokedInviteLinkCount: number
}
