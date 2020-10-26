import {
  CallDiscardReasonUnion,
  CallProtocol,
  CallServer,
  Error
} from './index'

/** Describes the current call state */
export type CallStateUnion = CallStatePending
  | CallStateExchangingKeys
  | CallStateReady
  | CallStateHangingUp
  | CallStateDiscarded
  | CallStateError

/** The call is pending, waiting to be accepted by a user */
export interface CallStatePending {
  _: 'callStatePending'
  /** True, if the call has already been created by the server */
  isCreated: boolean
  /** True, if the call has already been received by the other party */
  isReceived: boolean
}

/** The call has been answered and encryption keys are being exchanged */
export interface CallStateExchangingKeys {
  _: 'callStateExchangingKeys'
}

/** The call is ready to use */
export interface CallStateReady {
  _: 'callStateReady'
  /** Call protocols supported by the peer */
  protocol: CallProtocol
  /** List of available call servers */
  servers: CallServer[]
  /** A JSON-encoded call config */
  config: string
  /** Call encryption key */
  encryptionKey: string
  /** Encryption key emojis fingerprint */
  emojis: string[]
  /** True, if peer-to-peer connection is allowed by users privacy settings */
  allowP2P: boolean
}

/** The call is hanging up after discardCall has been called */
export interface CallStateHangingUp {
  _: 'callStateHangingUp'
}

/** The call has ended successfully */
export interface CallStateDiscarded {
  _: 'callStateDiscarded'
  /** The reason, why the call has ended */
  reason: CallDiscardReasonUnion
  /** True, if the call rating should be sent to the server */
  needRating: boolean
  /** True, if the call debug information should be sent to the server */
  needDebugInformation: boolean
}

/** The call has ended with an error */
export interface CallStateError {
  _: 'callStateError'
  /**
   * Error. An error with the code 4005000 will be returned if an outgoing call is missed
   * because of an expired timeout
   */
  error: Error
}
