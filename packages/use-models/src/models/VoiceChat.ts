import { MessageSenderUnion } from '@airgram/core'

/** Describes a voice chat */
export class VoiceChatBaseModel {
  public _: 'voiceChat'

  /**
   * Group call identifier of an active voice chat; 0 if none. Full informationa about
   * the voice chat can be received through the method getGroupCall
   */
  public groupCallId: number

  /** True, if the voice chat has participants */
  public hasParticipants: boolean

  /** Default group call participant identifier to join the voice chat; may be null */
  public defaultParticipantId?: MessageSenderUnion
}
