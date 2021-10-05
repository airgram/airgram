import { GroupCallParticipantVideoInfo, MessageSenderUnion } from './index'

export type GroupCallParticipantUnion = GroupCallParticipant

/** Represents a group call participant */
export interface GroupCallParticipant {
  _: 'groupCallParticipant'
  /** Identifier of the group call participant */
  participantId: MessageSenderUnion
  /** User's audio channel synchronization source identifier */
  audioSourceId: number
  /** User's screen sharing audio channel synchronization source identifier */
  screenSharingAudioSourceId: number
  /** Information about user's video channel; may be null if there is no active video */
  videoInfo?: GroupCallParticipantVideoInfo
  /**
   * Information about user's screen sharing video channel; may be null if there is no
   * active screen sharing video
   */
  screenSharingVideoInfo?: GroupCallParticipantVideoInfo
  /** The participant user's bio or the participant chat's description */
  bio: string
  /** True, if the participant is the current user */
  isCurrentUser: boolean
  /** True, if the participant is speaking as set by setGroupCallParticipantIsSpeaking */
  isSpeaking: boolean
  /** True, if the participant hand is raised */
  isHandRaised: boolean
  /** True, if the current user can mute the participant for all other group call participants */
  canBeMutedForAllUsers: boolean
  /**
   * True, if the current user can allow the participant to unmute themselves or unmute
   * the participant (if the participant is the current user)
   */
  canBeUnmutedForAllUsers: boolean
  /** True, if the current user can mute the participant only for self */
  canBeMutedForCurrentUser: boolean
  /** True, if the current user can unmute the participant for self */
  canBeUnmutedForCurrentUser: boolean
  /** True, if the participant is muted for all users */
  isMutedForAllUsers: boolean
  /** True, if the participant is muted for the current user */
  isMutedForCurrentUser: boolean
  /** True, if the participant is muted for all users, but can unmute themselves */
  canUnmuteSelf: boolean
  /** Participant's volume level; 1-20000 in hundreds of percents */
  volumeLevel: number
  /**
   * User's order in the group call participant list. Orders must be compared lexicographically.
   * The bigger is order, the higher is user in the list. If order is empty, the user
   * must be removed from the participant list
   */
  order: string
}
