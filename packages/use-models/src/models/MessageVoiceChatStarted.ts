/** A newly created voice chat */
export class MessageVoiceChatStartedBaseModel {
  public _: 'messageVoiceChatStarted'

  /** Identifier of the voice chat. The voice chat can be received through the method getGroupCall */
  public groupCallId: number
}
