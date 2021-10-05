import { MessageSenderUnion } from '@airgram/core'

/** A voice chat participant was muted or unmuted */
export class ChatEventVoiceChatParticipantIsMutedToggledBaseModel {
  public _: 'chatEventVoiceChatParticipantIsMutedToggled'

  /** Identifier of the affected group call participant */
  public participantId: MessageSenderUnion

  /** New value of is_muted */
  public isMuted: boolean
}
