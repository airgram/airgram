import { MessageSenderUnion } from './index'

export type VideoChatUnion = VideoChat

/** Describes a video chat */
export interface VideoChat {
  _: 'videoChat'
  /**
   * Group call identifier of an active video chat; 0 if none. Full information about
   * the video chat can be received through the method getGroupCall
   */
  groupCallId: number
  /** True, if the video chat has participants */
  hasParticipants: boolean
  /** Default group call participant identifier to join the video chat; may be null */
  defaultParticipantId?: MessageSenderUnion
}
