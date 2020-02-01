/**
 * Represents result of checking whether the current session can be used to transfer
 * a chat ownership to another user
 */
export type CanTransferOwnershipResultUnion = CanTransferOwnershipResultOk
  | CanTransferOwnershipResultPasswordNeeded
  | CanTransferOwnershipResultPasswordTooFresh
  | CanTransferOwnershipResultSessionTooFresh

/** The session can be used */
export interface CanTransferOwnershipResultOk {
  _: 'canTransferOwnershipResultOk'
}

/** The 2-step verification needs to be enabled first */
export interface CanTransferOwnershipResultPasswordNeeded {
  _: 'canTransferOwnershipResultPasswordNeeded'
}

/** The 2-step verification was enabled recently, user needs to wait */
export interface CanTransferOwnershipResultPasswordTooFresh {
  _: 'canTransferOwnershipResultPasswordTooFresh'
  /** Time left before the session can be used to transfer ownership of a chat, in seconds */
  retryAfter: number
}

/** The session was created recently, user needs to wait */
export interface CanTransferOwnershipResultSessionTooFresh {
  _: 'canTransferOwnershipResultSessionTooFresh'
  /** Time left before the session can be used to transfer ownership of a chat, in seconds */
  retryAfter: number
}
