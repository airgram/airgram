import { MessageSenderUnion } from './index'

export type GroupCallRecentSpeakerUnion = GroupCallRecentSpeaker

/** Describes a recently speaking participant in a group call */
export interface GroupCallRecentSpeaker {
  _: 'groupCallRecentSpeaker'
  /** Group call participant identifier */
  participantId: MessageSenderUnion
  /** True, is the user has spoken recently */
  isSpeaking: boolean
}
