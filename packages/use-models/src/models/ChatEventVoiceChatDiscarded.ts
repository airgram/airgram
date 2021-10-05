/** A voice chat was discarded */
export class ChatEventVoiceChatDiscardedBaseModel {
  public _: 'chatEventVoiceChatDiscarded'

  /** Identifier of the voice chat. The voice chat can be received through the method getGroupCall */
  public groupCallId: number
}
