
export interface SendMessageCancelAction {
  _: 'sendMessageCancelAction'
}

export interface SendMessageChooseContactAction {
  _: 'sendMessageChooseContactAction'
}

export interface SendMessageGamePlayAction {
  _: 'sendMessageGamePlayAction'
}

export interface SendMessageGeoLocationAction {
  _: 'sendMessageGeoLocationAction'
}

export interface SendMessageRecordAudioAction {
  _: 'sendMessageRecordAudioAction'
}

export interface SendMessageRecordRoundAction {
  _: 'sendMessageRecordRoundAction'
}

export interface SendMessageRecordVideoAction {
  _: 'sendMessageRecordVideoAction'
}

export interface SendMessageTypingAction {
  _: 'sendMessageTypingAction'
}

export interface SendMessageUploadAudioAction {
  _: 'sendMessageUploadAudioAction'
  progress: number
}

export interface SendMessageUploadDocumentAction {
  _: 'sendMessageUploadDocumentAction'
  progress: number
}

export interface SendMessageUploadPhotoAction {
  _: 'sendMessageUploadPhotoAction'
  progress: number
}

export interface SendMessageUploadRoundAction {
  _: 'sendMessageUploadRoundAction'
  progress: number
}

export interface SendMessageUploadVideoAction {
  _: 'sendMessageUploadVideoAction'
  progress: number
}

export type SendMessageActionUnion = SendMessageCancelAction
  | SendMessageChooseContactAction
  | SendMessageGamePlayAction
  | SendMessageGeoLocationAction
  | SendMessageRecordAudioAction
  | SendMessageRecordRoundAction
  | SendMessageRecordVideoAction
  | SendMessageTypingAction
  | SendMessageUploadAudioAction
  | SendMessageUploadDocumentAction
  | SendMessageUploadPhotoAction
  | SendMessageUploadRoundAction
  | SendMessageUploadVideoAction
