import {
  Animation,
  Audio,
  Document,
  Photo,
  Sticker,
  Video,
  VideoNote,
  VoiceNote
} from './index'

/** Contains content of a push message notification */
export type PushMessageContentUnion = PushMessageContentHidden
  | PushMessageContentAnimation
  | PushMessageContentAudio
  | PushMessageContentContact
  | PushMessageContentContactRegistered
  | PushMessageContentDocument
  | PushMessageContentGame
  | PushMessageContentGameScore
  | PushMessageContentInvoice
  | PushMessageContentLocation
  | PushMessageContentPhoto
  | PushMessageContentPoll
  | PushMessageContentScreenshotTaken
  | PushMessageContentSticker
  | PushMessageContentText
  | PushMessageContentVideo
  | PushMessageContentVideoNote
  | PushMessageContentVoiceNote
  | PushMessageContentBasicGroupChatCreate
  | PushMessageContentChatAddMembers
  | PushMessageContentChatChangePhoto
  | PushMessageContentChatChangeTitle
  | PushMessageContentChatDeleteMember
  | PushMessageContentChatJoinByLink
  | PushMessageContentMessageForwards
  | PushMessageContentMediaAlbum

/** A general message with hidden content */
export interface PushMessageContentHidden {
  _: 'pushMessageContentHidden'
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** An animation message (GIF-style). */
export interface PushMessageContentAnimation {
  _: 'pushMessageContentAnimation'
  /** Message content; may be null */
  animation?: Animation
  /** Animation caption */
  caption: string
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** An audio message */
export interface PushMessageContentAudio {
  _: 'pushMessageContentAudio'
  /** Message content; may be null */
  audio?: Audio
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A message with a user contact */
export interface PushMessageContentContact {
  _: 'pushMessageContentContact'
  /** Contact's name */
  name: string
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A contact has registered with Telegram */
export interface PushMessageContentContactRegistered {
  _: 'pushMessageContentContactRegistered'
}

/** A document message (a general file) */
export interface PushMessageContentDocument {
  _: 'pushMessageContentDocument'
  /** Message content; may be null */
  document?: Document
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A message with a game */
export interface PushMessageContentGame {
  _: 'pushMessageContentGame'
  /** Game title, empty for pinned game message */
  title: string
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A new high score was achieved in a game */
export interface PushMessageContentGameScore {
  _: 'pushMessageContentGameScore'
  /** Game title, empty for pinned message */
  title: string
  /** New score, 0 for pinned message */
  score: number
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A message with an invoice from a bot */
export interface PushMessageContentInvoice {
  _: 'pushMessageContentInvoice'
  /** Product price */
  price: string
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A message with a location */
export interface PushMessageContentLocation {
  _: 'pushMessageContentLocation'
  /** True, if the location is live */
  isLive: boolean
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A photo message */
export interface PushMessageContentPhoto {
  _: 'pushMessageContentPhoto'
  /** Message content; may be null */
  photo?: Photo
  /** Photo caption */
  caption: string
  /** True, if the photo is secret */
  isSecret: boolean
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A message with a poll */
export interface PushMessageContentPoll {
  _: 'pushMessageContentPoll'
  /** Poll question */
  question: string
  /** True, if the poll is regular and not in quiz mode */
  isRegular: boolean
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A screenshot of a message in the chat has been taken */
export interface PushMessageContentScreenshotTaken {
  _: 'pushMessageContentScreenshotTaken'
}

/** A message with a sticker */
export interface PushMessageContentSticker {
  _: 'pushMessageContentSticker'
  /** Message content; may be null */
  sticker?: Sticker
  /** Emoji corresponding to the sticker; may be empty */
  emoji: string
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A text message */
export interface PushMessageContentText {
  _: 'pushMessageContentText'
  /** Message text */
  text: string
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A video message */
export interface PushMessageContentVideo {
  _: 'pushMessageContentVideo'
  /** Message content; may be null */
  video?: Video
  /** Video caption */
  caption: string
  /** True, if the video is secret */
  isSecret: boolean
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A video note message */
export interface PushMessageContentVideoNote {
  _: 'pushMessageContentVideoNote'
  /** Message content; may be null */
  videoNote?: VideoNote
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A voice note message */
export interface PushMessageContentVoiceNote {
  _: 'pushMessageContentVoiceNote'
  /** Message content; may be null */
  voiceNote?: VoiceNote
  /** True, if the message is a pinned message with the specified content */
  isPinned: boolean
}

/** A newly created basic group */
export interface PushMessageContentBasicGroupChatCreate {
  _: 'pushMessageContentBasicGroupChatCreate'
}

/** New chat members were invited to a group */
export interface PushMessageContentChatAddMembers {
  _: 'pushMessageContentChatAddMembers'
  /** Name of the added member */
  memberName: string
  /** True, if the current user was added to the group */
  isCurrentUser: boolean
  /** True, if the user has returned to the group themself */
  isReturned: boolean
}

/** A chat photo was edited */
export interface PushMessageContentChatChangePhoto {
  _: 'pushMessageContentChatChangePhoto'
}

/** A chat title was edited */
export interface PushMessageContentChatChangeTitle {
  _: 'pushMessageContentChatChangeTitle'
  /** New chat title */
  title: string
}

/** A chat member was deleted */
export interface PushMessageContentChatDeleteMember {
  _: 'pushMessageContentChatDeleteMember'
  /** Name of the deleted member */
  memberName: string
  /** True, if the current user was deleted from the group */
  isCurrentUser: boolean
  /** True, if the user has left the group themself */
  isLeft: boolean
}

/** A new member joined the chat by invite link */
export interface PushMessageContentChatJoinByLink {
  _: 'pushMessageContentChatJoinByLink'
}

/** A forwarded messages */
export interface PushMessageContentMessageForwards {
  _: 'pushMessageContentMessageForwards'
  /** Number of forwarded messages */
  totalCount: number
}

/** A media album */
export interface PushMessageContentMediaAlbum {
  _: 'pushMessageContentMediaAlbum'
  /** Number of messages in the album */
  totalCount: number
  /** True, if the album has at least one photo */
  hasPhotos: boolean
  /** True, if the album has at least one video */
  hasVideos: boolean
}
