/** Describes the different types of activity in a chat */
export type ChatActionUnion = ChatActionTyping
  | ChatActionRecordingVideo
  | ChatActionUploadingVideo
  | ChatActionRecordingVoiceNote
  | ChatActionUploadingVoiceNote
  | ChatActionUploadingPhoto
  | ChatActionUploadingDocument
  | ChatActionChoosingSticker
  | ChatActionChoosingLocation
  | ChatActionChoosingContact
  | ChatActionStartPlayingGame
  | ChatActionRecordingVideoNote
  | ChatActionUploadingVideoNote
  | ChatActionWatchingAnimations
  | ChatActionCancel

/** The user is typing a message */
export interface ChatActionTyping {
  _: 'chatActionTyping'
}

/** The user is recording a video */
export interface ChatActionRecordingVideo {
  _: 'chatActionRecordingVideo'
}

/** The user is uploading a video */
export interface ChatActionUploadingVideo {
  _: 'chatActionUploadingVideo'
  /** Upload progress, as a percentage */
  progress: number
}

/** The user is recording a voice note */
export interface ChatActionRecordingVoiceNote {
  _: 'chatActionRecordingVoiceNote'
}

/** The user is uploading a voice note */
export interface ChatActionUploadingVoiceNote {
  _: 'chatActionUploadingVoiceNote'
  /** Upload progress, as a percentage */
  progress: number
}

/** The user is uploading a photo */
export interface ChatActionUploadingPhoto {
  _: 'chatActionUploadingPhoto'
  /** Upload progress, as a percentage */
  progress: number
}

/** The user is uploading a document */
export interface ChatActionUploadingDocument {
  _: 'chatActionUploadingDocument'
  /** Upload progress, as a percentage */
  progress: number
}

/** The user is picking a sticker to send */
export interface ChatActionChoosingSticker {
  _: 'chatActionChoosingSticker'
}

/** The user is picking a location or venue to send */
export interface ChatActionChoosingLocation {
  _: 'chatActionChoosingLocation'
}

/** The user is picking a contact to send */
export interface ChatActionChoosingContact {
  _: 'chatActionChoosingContact'
}

/** The user has started to play a game */
export interface ChatActionStartPlayingGame {
  _: 'chatActionStartPlayingGame'
}

/** The user is recording a video note */
export interface ChatActionRecordingVideoNote {
  _: 'chatActionRecordingVideoNote'
}

/** The user is uploading a video note */
export interface ChatActionUploadingVideoNote {
  _: 'chatActionUploadingVideoNote'
  /** Upload progress, as a percentage */
  progress: number
}

/**
 * The user is watching animations sent by the other party by clicking on an animated
 * emoji
 */
export interface ChatActionWatchingAnimations {
  _: 'chatActionWatchingAnimations'
  /** The animated emoji */
  emoji: string
}

/** The user has canceled the previous action */
export interface ChatActionCancel {
  _: 'chatActionCancel'
}
