/** A message with information about an ended video chat */
export class MessageVideoChatEndedBaseModel {
  public _: 'messageVideoChatEnded'

  /** Call duration, in seconds */
  public duration: number
}
