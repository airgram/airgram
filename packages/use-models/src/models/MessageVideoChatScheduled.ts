/** A new video chat was scheduled */
export class MessageVideoChatScheduledBaseModel {
  public _: 'messageVideoChatScheduled'

  /** Identifier of the video chat. The video chat can be received through the method getGroupCall */
  public groupCallId: number

  /**
   * Point in time (Unix timestamp) when the group call is supposed to be started by an
   * administrator
   */
  public startDate: number
}
