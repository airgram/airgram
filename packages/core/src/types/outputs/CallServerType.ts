/** Describes the type of a call server */
export type CallServerTypeUnion = CallServerTypeTelegramReflector
  | CallServerTypeWebrtc

/** A Telegram call reflector */
export interface CallServerTypeTelegramReflector {
  _: 'callServerTypeTelegramReflector'
  /** A peer tag to be used with the reflector */
  peerTag: string
}

/** A WebRTC server */
export interface CallServerTypeWebrtc {
  _: 'callServerTypeWebrtc'
  /** Username to be used for authentication */
  username: string
  /** Authentication password */
  password: string
  /** True, if the server supports TURN */
  supportsTurn: boolean
  /** True, if the server supports STUN */
  supportsStun: boolean
}
