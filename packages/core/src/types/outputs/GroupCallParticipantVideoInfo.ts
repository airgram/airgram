import { GroupCallVideoSourceGroup } from './index'

export type GroupCallParticipantVideoInfoUnion = GroupCallParticipantVideoInfo

/** Contains information about a group call participant's video channel */
export interface GroupCallParticipantVideoInfo {
  _: 'groupCallParticipantVideoInfo'
  /** List of synchronization source groups of the video */
  sourceGroups: GroupCallVideoSourceGroup[]
  /** Video channel endpoint identifier */
  endpointId: string
  /**
   * True if the video is paused. This flag needs to be ignored, if new video frames are
   * received
   */
  isPaused: boolean
}
