import { GroupCallVideoSourceGroup } from '@airgram/core'

/** Contains information about a group call participant's video channel */
export class GroupCallParticipantVideoInfoBaseModel {
  public _: 'groupCallParticipantVideoInfo'

  /** List of synchronization source groups of the video */
  public sourceGroups: GroupCallVideoSourceGroup[]

  /** Video channel endpoint identifier */
  public endpointId: string

  /**
   * True if the video is paused. This flag needs to be ignored, if new video frames are
   * received
   */
  public isPaused: boolean
}
