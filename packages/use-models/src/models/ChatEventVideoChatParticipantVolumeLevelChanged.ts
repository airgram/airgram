import { MessageSenderUnion } from '@airgram/core'

/** A video chat participant volume level was changed */
export class ChatEventVideoChatParticipantVolumeLevelChangedBaseModel {
  public _: 'chatEventVideoChatParticipantVolumeLevelChanged'

  /** Identifier of the affected group call participant */
  public participantId: MessageSenderUnion

  /** New value of volume_level; 1-20000 in hundreds of percents */
  public volumeLevel: number
}
