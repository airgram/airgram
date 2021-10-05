import { MessageSenderUnion } from '@airgram/core'

/** A voice chat participant volume level was changed */
export class ChatEventVoiceChatParticipantVolumeLevelChangedBaseModel {
  public _: 'chatEventVoiceChatParticipantVolumeLevelChanged'

  /** Identifier of the affected group call participant */
  public participantId: MessageSenderUnion

  /** New value of volume_level; 1-20000 in hundreds of percents */
  public volumeLevel: number
}
