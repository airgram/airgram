/** A new voice chat was scheduled */
export class MessageVoiceChatScheduledBaseModel {
  public _: 'messageVoiceChatScheduled'

  /** Identifier of the voice chat. The voice chat can be received through the method getGroupCall */
  public groupCallId: number

  /**
   * Point in time (Unix timestamp) when the group call is supposed to be started by an
   * administrator
   */
  public startDate: number
}
