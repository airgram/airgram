import {
  GroupCallParticipantVideoInfo,
  MessageSenderUnion
} from '@airgram/core'

/** Represents a group call participant */
export class GroupCallParticipantBaseModel {
  public _: 'groupCallParticipant'

  /** Identifier of the group call participant */
  public participantId: MessageSenderUnion

  /** User's audio channel synchronization source identifier */
  public audioSourceId: number

  /** User's screen sharing audio channel synchronization source identifier */
  public screenSharingAudioSourceId: number

  /** Information about user's video channel; may be null if there is no active video */
  public videoInfo?: GroupCallParticipantVideoInfo

  /**
   * Information about user's screen sharing video channel; may be null if there is no
   * active screen sharing video
   */
  public screenSharingVideoInfo?: GroupCallParticipantVideoInfo

  /** The participant user's bio or the participant chat's description */
  public bio: string

  /** True, if the participant is the current user */
  public isCurrentUser: boolean

  /** True, if the participant is speaking as set by setGroupCallParticipantIsSpeaking */
  public isSpeaking: boolean

  /** True, if the participant hand is raised */
  public isHandRaised: boolean

  /** True, if the current user can mute the participant for all other group call participants */
  public canBeMutedForAllUsers: boolean

  /**
   * True, if the current user can allow the participant to unmute themselves or unmute
   * the participant (if the participant is the current user)
   */
  public canBeUnmutedForAllUsers: boolean

  /** True, if the current user can mute the participant only for self */
  public canBeMutedForCurrentUser: boolean

  /** True, if the current user can unmute the participant for self */
  public canBeUnmutedForCurrentUser: boolean

  /** True, if the participant is muted for all users */
  public isMutedForAllUsers: boolean

  /** True, if the participant is muted for the current user */
  public isMutedForCurrentUser: boolean

  /** True, if the participant is muted for all users, but can unmute themselves */
  public canUnmuteSelf: boolean

  /** Participant's volume level; 1-20000 in hundreds of percents */
  public volumeLevel: number

  /**
   * User's order in the group call participant list. Orders must be compared lexicographically.
   * The bigger is order, the higher is user in the list. If order is empty, the user
   * must be removed from the participant list
   */
  public order: string
}
