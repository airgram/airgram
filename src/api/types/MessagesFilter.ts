
export interface InputMessagesFilterChatPhotos {
  _: 'inputMessagesFilterChatPhotos'
}

export interface InputMessagesFilterDocument {
  _: 'inputMessagesFilterDocument'
}

export interface InputMessagesFilterEmpty {
  _: 'inputMessagesFilterEmpty'
}

export interface InputMessagesFilterGif {
  _: 'inputMessagesFilterGif'
}

export interface InputMessagesFilterMusic {
  _: 'inputMessagesFilterMusic'
}

export interface InputMessagesFilterMyMentions {
  _: 'inputMessagesFilterMyMentions'
}

export interface InputMessagesFilterMyMentionsUnread {
  _: 'inputMessagesFilterMyMentionsUnread'
}

export interface InputMessagesFilterPhoneCalls {
  _: 'inputMessagesFilterPhoneCalls'
  flags: number
  missed?: true
}

export interface InputMessagesFilterPhotoVideo {
  _: 'inputMessagesFilterPhotoVideo'
}

export interface InputMessagesFilterPhotoVideoDocuments {
  _: 'inputMessagesFilterPhotoVideoDocuments'
}

export interface InputMessagesFilterPhotos {
  _: 'inputMessagesFilterPhotos'
}

export interface InputMessagesFilterRoundVideo {
  _: 'inputMessagesFilterRoundVideo'
}

export interface InputMessagesFilterRoundVoice {
  _: 'inputMessagesFilterRoundVoice'
}

export interface InputMessagesFilterUrl {
  _: 'inputMessagesFilterUrl'
}

export interface InputMessagesFilterVideo {
  _: 'inputMessagesFilterVideo'
}

export interface InputMessagesFilterVoice {
  _: 'inputMessagesFilterVoice'
}

export type MessagesFilterUnion = InputMessagesFilterChatPhotos
  | InputMessagesFilterDocument
  | InputMessagesFilterEmpty
  | InputMessagesFilterGif
  | InputMessagesFilterMusic
  | InputMessagesFilterMyMentions
  | InputMessagesFilterMyMentionsUnread
  | InputMessagesFilterPhoneCalls
  | InputMessagesFilterPhotoVideo
  | InputMessagesFilterPhotoVideoDocuments
  | InputMessagesFilterPhotos
  | InputMessagesFilterRoundVideo
  | InputMessagesFilterRoundVoice
  | InputMessagesFilterUrl
  | InputMessagesFilterVideo
  | InputMessagesFilterVoice
