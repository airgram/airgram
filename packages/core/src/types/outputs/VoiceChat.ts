import { MessageSenderUnion } from './index'

export type VoiceChatUnion = VoiceChat

/** Describes a voice chat */
export interface VoiceChat {
  _: 'voiceChat'
  /**
   * Group call identifier of an active voice chat; 0 if none. Full informationa about
   * the voice chat can be received through the method getGroupCall
   */
  groupCallId: number
  /** True, if the voice chat has participants */
  hasParticipants: boolean
  /** Default group call participant identifier to join the voice chat; may be null */
  defaultParticipantId?: MessageSenderUnion
}
