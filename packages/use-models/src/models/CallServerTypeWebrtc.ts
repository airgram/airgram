/** A WebRTC server */
export class CallServerTypeWebrtcBaseModel {
  public _: 'callServerTypeWebrtc'

  /** Username to be used for authentication */
  public username: string

  /** Authentication password */
  public password: string

  /** True, if the server supports TURN */
  public supportsTurn: boolean

  /** True, if the server supports STUN */
  public supportsStun: boolean
}
