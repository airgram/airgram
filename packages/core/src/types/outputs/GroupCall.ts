import { GroupCallRecentSpeaker } from './index'

export type GroupCallUnion = GroupCall

/** Describes a group call */
export interface GroupCall {
  _: 'groupCall'
  /** Group call identifier */
  id: number
  /** Group call title */
  title: string
  /**
   * Point in time (Unix timestamp) when the group call is supposed to be started by an
   * administrator; 0 if it is already active or was ended
   */
  scheduledStartDate: number
  /**
   * True, if the group call is scheduled and the current user will receive a notification
   * when the group call will start
   */
  enabledStartNotification: boolean
  /** True, if the call is active */
  isActive: boolean
  /** True, if the call is joined */
  isJoined: boolean
  /**
   * True, if user was kicked from the call because of network loss and the call needs
   * to be rejoined
   */
  needRejoin: boolean
  /** True, if the current user can manage the group call */
  canBeManaged: boolean
  /** Number of participants in the group call */
  participantCount: number
  /** True, if all group call participants are loaded */
  loadedAllParticipants: boolean
  /** At most 3 recently speaking users in the group call */
  recentSpeakers: GroupCallRecentSpeaker[]
  /** True, if the current user's video is enabled */
  isMyVideoEnabled: boolean
  /** True, if the current user's video is paused */
  isMyVideoPaused: boolean
  /** True, if the current user can broadcast video or share screen */
  canEnableVideo: boolean
  /** True, if only group call administrators can unmute new participants */
  muteNewParticipants: boolean
  /** True, if the current user can enable or disable mute_new_participants setting */
  canToggleMuteNewParticipants: boolean
  /**
   * Duration of the ongoing group call recording, in seconds; 0 if none. An updateGroupCall
   * update is not triggered when value of this field changes, but the same recording
   * goes on
   */
  recordDuration: number
  /** True, if a video file is being recorded for the call */
  isVideoRecorded: boolean
  /** Call duration, in seconds; for ended calls only */
  duration: number
}
