/** The 2-step verification was enabled recently, user needs to wait */
export class CanTransferOwnershipResultPasswordTooFreshBaseModel {
  public _: 'canTransferOwnershipResultPasswordTooFresh'

  /** Time left before the session can be used to transfer ownership of a chat, in seconds */
  public retryAfter: number
}
