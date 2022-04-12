/**
 * The link is a link to a video chat. Call searchPublicChat with the given chat username,
 * and then joinGroupCall with the given invite hash to process the link
 */
export class InternalLinkTypeVideoChatBaseModel {
  public _: 'internalLinkTypeVideoChat'

  /** Username of the chat with the video chat */
  public chatUsername: string

  /**
   * If non-empty, invite hash to be used to join the video chat without being muted by
   * administrators
   */
  public inviteHash: string

  /**
   * True, if the video chat is expected to be a live stream in a channel or a broadcast
   * group
   */
  public isLiveStream: boolean
}
