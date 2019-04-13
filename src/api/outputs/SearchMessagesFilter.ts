/** Represents a filter for message search results */
export type SearchMessagesFilterUnion = SearchMessagesFilterEmpty
  | SearchMessagesFilterAnimation
  | SearchMessagesFilterAudio
  | SearchMessagesFilterDocument
  | SearchMessagesFilterPhoto
  | SearchMessagesFilterVideo
  | SearchMessagesFilterVoiceNote
  | SearchMessagesFilterPhotoAndVideo
  | SearchMessagesFilterUrl
  | SearchMessagesFilterChatPhoto
  | SearchMessagesFilterCall
  | SearchMessagesFilterMissedCall
  | SearchMessagesFilterVideoNote
  | SearchMessagesFilterVoiceAndVideoNote
  | SearchMessagesFilterMention
  | SearchMessagesFilterUnreadMention

/** Returns all found messages, no filter is applied */
export interface SearchMessagesFilterEmpty {
  _: 'searchMessagesFilterEmpty'
}

/** Returns only animation messages */
export interface SearchMessagesFilterAnimation {
  _: 'searchMessagesFilterAnimation'
}

/** Returns only audio messages */
export interface SearchMessagesFilterAudio {
  _: 'searchMessagesFilterAudio'
}

/** Returns only document messages */
export interface SearchMessagesFilterDocument {
  _: 'searchMessagesFilterDocument'
}

/** Returns only photo messages */
export interface SearchMessagesFilterPhoto {
  _: 'searchMessagesFilterPhoto'
}

/** Returns only video messages */
export interface SearchMessagesFilterVideo {
  _: 'searchMessagesFilterVideo'
}

/** Returns only voice note messages */
export interface SearchMessagesFilterVoiceNote {
  _: 'searchMessagesFilterVoiceNote'
}

/** Returns only photo and video messages */
export interface SearchMessagesFilterPhotoAndVideo {
  _: 'searchMessagesFilterPhotoAndVideo'
}

/** Returns only messages containing URLs */
export interface SearchMessagesFilterUrl {
  _: 'searchMessagesFilterUrl'
}

/** Returns only messages containing chat photos */
export interface SearchMessagesFilterChatPhoto {
  _: 'searchMessagesFilterChatPhoto'
}

/** Returns only call messages */
export interface SearchMessagesFilterCall {
  _: 'searchMessagesFilterCall'
}

/** Returns only incoming call messages with missed/declined discard reasons */
export interface SearchMessagesFilterMissedCall {
  _: 'searchMessagesFilterMissedCall'
}

/** Returns only video note messages */
export interface SearchMessagesFilterVideoNote {
  _: 'searchMessagesFilterVideoNote'
}

/** Returns only voice and video note messages */
export interface SearchMessagesFilterVoiceAndVideoNote {
  _: 'searchMessagesFilterVoiceAndVideoNote'
}

/**
 * Returns only messages with mentions of the current user, or messages that are replies
 * to their messages
 */
export interface SearchMessagesFilterMention {
  _: 'searchMessagesFilterMention'
}

/**
 * Returns only messages with unread mentions of the current user or messages that are
 * replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export interface SearchMessagesFilterUnreadMention {
  _: 'searchMessagesFilterUnreadMention'
}
