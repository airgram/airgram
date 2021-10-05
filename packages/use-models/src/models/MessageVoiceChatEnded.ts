/** A message with information about an ended voice chat */
export class MessageVoiceChatEndedBaseModel {
  public _: 'messageVoiceChatEnded'

  /** Call duration, in seconds */
  public duration: number
}
