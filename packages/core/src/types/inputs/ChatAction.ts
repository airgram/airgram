/** Describes the different types of activity in a chat */
export type ChatActionInputUnion = ChatActionTypingInput
  | ChatActionRecordingVideoInput
  | ChatActionUploadingVideoInput
  | ChatActionRecordingVoiceNoteInput
  | ChatActionUploadingVoiceNoteInput
  | ChatActionUploadingPhotoInput
  | ChatActionUploadingDocumentInput
  | ChatActionChoosingLocationInput
  | ChatActionChoosingContactInput
  | ChatActionStartPlayingGameInput
  | ChatActionRecordingVideoNoteInput
  | ChatActionUploadingVideoNoteInput
  | ChatActionCancelInput

/** The user is typing a message */
export interface ChatActionTypingInput {
  _: 'chatActionTyping'
}

/** The user is recording a video */
export interface ChatActionRecordingVideoInput {
  _: 'chatActionRecordingVideo'
}

/** The user is uploading a video */
export interface ChatActionUploadingVideoInput {
  _: 'chatActionUploadingVideo'
  /** Upload progress, as a percentage */
  progress?: number
}

/** The user is recording a voice note */
export interface ChatActionRecordingVoiceNoteInput {
  _: 'chatActionRecordingVoiceNote'
}

/** The user is uploading a voice note */
export interface ChatActionUploadingVoiceNoteInput {
  _: 'chatActionUploadingVoiceNote'
  /** Upload progress, as a percentage */
  progress?: number
}

/** The user is uploading a photo */
export interface ChatActionUploadingPhotoInput {
  _: 'chatActionUploadingPhoto'
  /** Upload progress, as a percentage */
  progress?: number
}

/** The user is uploading a document */
export interface ChatActionUploadingDocumentInput {
  _: 'chatActionUploadingDocument'
  /** Upload progress, as a percentage */
  progress?: number
}

/** The user is picking a location or venue to send */
export interface ChatActionChoosingLocationInput {
  _: 'chatActionChoosingLocation'
}

/** The user is picking a contact to send */
export interface ChatActionChoosingContactInput {
  _: 'chatActionChoosingContact'
}

/** The user has started to play a game */
export interface ChatActionStartPlayingGameInput {
  _: 'chatActionStartPlayingGame'
}

/** The user is recording a video note */
export interface ChatActionRecordingVideoNoteInput {
  _: 'chatActionRecordingVideoNote'
}

/** The user is uploading a video note */
export interface ChatActionUploadingVideoNoteInput {
  _: 'chatActionUploadingVideoNote'
  /** Upload progress, as a percentage */
  progress?: number
}

/** The user has cancelled the previous action */
export interface ChatActionCancelInput {
  _: 'chatActionCancel'
}
