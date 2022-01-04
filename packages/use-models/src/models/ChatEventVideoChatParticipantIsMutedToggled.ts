import { MessageSenderUnion } from '@airgram/core'

/** A video chat participant was muted or unmuted */
export class ChatEventVideoChatParticipantIsMutedToggledBaseModel {
  public _: 'chatEventVideoChatParticipantIsMutedToggled'

  /** Identifier of the affected group call participant */
  public participantId: MessageSenderUnion

  /** New value of is_muted */
  public isMuted: boolean
}
