import { MessageSenderUnion } from '@airgram/core'

/** Describes a video chat */
export class VideoChatBaseModel {
  public _: 'videoChat'

  /**
   * Group call identifier of an active video chat; 0 if none. Full information about
   * the video chat can be received through the method getGroupCall
   */
  public groupCallId: number

  /** True, if the video chat has participants */
  public hasParticipants: boolean

  /** Default group call participant identifier to join the video chat; may be null */
  public defaultParticipantId?: MessageSenderUnion
}
