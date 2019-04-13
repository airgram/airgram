/** Represents a filter for message search results */
export type SearchMessagesFilterInputUnion = SearchMessagesFilterEmptyInput
  | SearchMessagesFilterAnimationInput
  | SearchMessagesFilterAudioInput
  | SearchMessagesFilterDocumentInput
  | SearchMessagesFilterPhotoInput
  | SearchMessagesFilterVideoInput
  | SearchMessagesFilterVoiceNoteInput
  | SearchMessagesFilterPhotoAndVideoInput
  | SearchMessagesFilterUrlInput
  | SearchMessagesFilterChatPhotoInput
  | SearchMessagesFilterCallInput
  | SearchMessagesFilterMissedCallInput
  | SearchMessagesFilterVideoNoteInput
  | SearchMessagesFilterVoiceAndVideoNoteInput
  | SearchMessagesFilterMentionInput
  | SearchMessagesFilterUnreadMentionInput

/** Returns all found messages, no filter is applied */
export interface SearchMessagesFilterEmptyInput {
  _: 'searchMessagesFilterEmpty'
}

/** Returns only animation messages */
export interface SearchMessagesFilterAnimationInput {
  _: 'searchMessagesFilterAnimation'
}

/** Returns only audio messages */
export interface SearchMessagesFilterAudioInput {
  _: 'searchMessagesFilterAudio'
}

/** Returns only document messages */
export interface SearchMessagesFilterDocumentInput {
  _: 'searchMessagesFilterDocument'
}

/** Returns only photo messages */
export interface SearchMessagesFilterPhotoInput {
  _: 'searchMessagesFilterPhoto'
}

/** Returns only video messages */
export interface SearchMessagesFilterVideoInput {
  _: 'searchMessagesFilterVideo'
}

/** Returns only voice note messages */
export interface SearchMessagesFilterVoiceNoteInput {
  _: 'searchMessagesFilterVoiceNote'
}

/** Returns only photo and video messages */
export interface SearchMessagesFilterPhotoAndVideoInput {
  _: 'searchMessagesFilterPhotoAndVideo'
}

/** Returns only messages containing URLs */
export interface SearchMessagesFilterUrlInput {
  _: 'searchMessagesFilterUrl'
}

/** Returns only messages containing chat photos */
export interface SearchMessagesFilterChatPhotoInput {
  _: 'searchMessagesFilterChatPhoto'
}

/** Returns only call messages */
export interface SearchMessagesFilterCallInput {
  _: 'searchMessagesFilterCall'
}

/** Returns only incoming call messages with missed/declined discard reasons */
export interface SearchMessagesFilterMissedCallInput {
  _: 'searchMessagesFilterMissedCall'
}

/** Returns only video note messages */
export interface SearchMessagesFilterVideoNoteInput {
  _: 'searchMessagesFilterVideoNote'
}

/** Returns only voice and video note messages */
export interface SearchMessagesFilterVoiceAndVideoNoteInput {
  _: 'searchMessagesFilterVoiceAndVideoNote'
}

/**
 * Returns only messages with mentions of the current user, or messages that are replies
 * to their messages
 */
export interface SearchMessagesFilterMentionInput {
  _: 'searchMessagesFilterMention'
}

/**
 * Returns only messages with unread mentions of the current user or messages that are
 * replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export interface SearchMessagesFilterUnreadMentionInput {
  _: 'searchMessagesFilterUnreadMention'
}
