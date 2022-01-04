/** A video chat was ended */
export class ChatEventVideoChatEndedBaseModel {
  public _: 'chatEventVideoChatEnded'

  /** Identifier of the video chat. The video chat can be received through the method getGroupCall */
  public groupCallId: number
}
