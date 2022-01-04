/** A newly created video chat */
export class MessageVideoChatStartedBaseModel {
  public _: 'messageVideoChatStarted'

  /** Identifier of the video chat. The video chat can be received through the method getGroupCall */
  public groupCallId: number
}
