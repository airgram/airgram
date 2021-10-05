/** A voice chat was created */
export class ChatEventVoiceChatCreatedBaseModel {
  public _: 'chatEventVoiceChatCreated'

  /** Identifier of the voice chat. The voice chat can be received through the method getGroupCall */
  public groupCallId: number
}
