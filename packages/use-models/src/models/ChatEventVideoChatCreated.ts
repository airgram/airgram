/** A video chat was created */
export class ChatEventVideoChatCreatedBaseModel {
  public _: 'chatEventVideoChatCreated'

  /** Identifier of the video chat. The video chat can be received through the method getGroupCall */
  public groupCallId: number
}
