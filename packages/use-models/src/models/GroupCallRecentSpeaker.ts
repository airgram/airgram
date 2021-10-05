import { MessageSenderUnion } from '@airgram/core'

/** Describes a recently speaking participant in a group call */
export class GroupCallRecentSpeakerBaseModel {
  public _: 'groupCallRecentSpeaker'

  /** Group call participant identifier */
  public participantId: MessageSenderUnion

  /** True, is the user has spoken recently */
  public isSpeaking: boolean
}
