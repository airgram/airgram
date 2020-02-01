/** The session was created recently, user needs to wait */
export class CanTransferOwnershipResultSessionTooFreshBaseModel {
  public _: 'canTransferOwnershipResultSessionTooFresh'

  /** Time left before the session can be used to transfer ownership of a chat, in seconds */
  public retryAfter: number
}
