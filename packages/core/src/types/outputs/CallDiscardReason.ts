/** Describes the reason why a call was discarded */
export type CallDiscardReasonUnion = CallDiscardReasonEmpty
  | CallDiscardReasonMissed
  | CallDiscardReasonDeclined
  | CallDiscardReasonDisconnected
  | CallDiscardReasonHungUp

/** The call wasn't discarded, or the reason is unknown */
export interface CallDiscardReasonEmpty {
  _: 'callDiscardReasonEmpty'
}

/**
 * The call was ended before the conversation started. It was cancelled by the caller
 * or missed by the other party
 */
export interface CallDiscardReasonMissed {
  _: 'callDiscardReasonMissed'
}

/**
 * The call was ended before the conversation started. It was declined by the other
 * party
 */
export interface CallDiscardReasonDeclined {
  _: 'callDiscardReasonDeclined'
}

/** The call was ended during the conversation because the users were disconnected */
export interface CallDiscardReasonDisconnected {
  _: 'callDiscardReasonDisconnected'
}

/** The call was ended because one of the parties hung up */
export interface CallDiscardReasonHungUp {
  _: 'callDiscardReasonHungUp'
}
