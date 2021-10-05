/**
 * The link is a link to a voice chat. Call searchPublicChat with the given chat username,
 * and then joinGoupCall with the given invite hash to process the link
 */
export class InternalLinkTypeVoiceChatBaseModel {
  public _: 'internalLinkTypeVoiceChat'

  /** Username of the chat with the voice chat */
  public chatUsername: string

  /**
   * If non-empty, invite hash to be used to join the voice chat without being muted by
   * administrators
   */
  public inviteHash: string

  /**
   * True, if the voice chat is expected to be a live stream in a channel or a broadcast
   * group
   */
  public isLiveStream: boolean
}
