import {
  Animation,
  Audio,
  Contact,
  Document,
  Game,
  Location,
  Photo,
  PhotoSize,
  Sticker,
  Venue,
  Video,
  VoiceNote
} from './index'

/** Represents a single result of an inline query */
export type InlineQueryResultUnion = InlineQueryResultArticle
  | InlineQueryResultContact
  | InlineQueryResultLocation
  | InlineQueryResultVenue
  | InlineQueryResultGame
  | InlineQueryResultAnimation
  | InlineQueryResultAudio
  | InlineQueryResultDocument
  | InlineQueryResultPhoto
  | InlineQueryResultSticker
  | InlineQueryResultVideo
  | InlineQueryResultVoiceNote

/** Represents a link to an article or web page */
export interface InlineQueryResultArticle {
  _: 'inlineQueryResultArticle'
  /** Unique identifier of the query result */
  id: string
  /** URL of the result, if it exists */
  url: string
  /** True, if the URL must be not shown */
  hideUrl: boolean
  /** Title of the result */
  title: string
  /** A short description of the result */
  description: string
  /** Result thumbnail; may be null */
  thumbnail?: PhotoSize
}

/** Represents a user contact */
export interface InlineQueryResultContact {
  _: 'inlineQueryResultContact'
  /** Unique identifier of the query result */
  id: string
  /** A user contact */
  contact: Contact
  /** Result thumbnail; may be null */
  thumbnail?: PhotoSize
}

/** Represents a point on the map */
export interface InlineQueryResultLocation {
  _: 'inlineQueryResultLocation'
  /** Unique identifier of the query result */
  id: string
  /** Location result */
  location: Location
  /** Title of the result */
  title: string
  /** Result thumbnail; may be null */
  thumbnail?: PhotoSize
}

/** Represents information about a venue */
export interface InlineQueryResultVenue {
  _: 'inlineQueryResultVenue'
  /** Unique identifier of the query result */
  id: string
  /** Venue result */
  venue: Venue
  /** Result thumbnail; may be null */
  thumbnail?: PhotoSize
}

/** Represents information about a game */
export interface InlineQueryResultGame {
  _: 'inlineQueryResultGame'
  /** Unique identifier of the query result */
  id: string
  /** Game result */
  game: Game
}

/** Represents an animation file */
export interface InlineQueryResultAnimation {
  _: 'inlineQueryResultAnimation'
  /** Unique identifier of the query result */
  id: string
  /** Animation file */
  animation: Animation
  /** Animation title */
  title: string
}

/** Represents an audio file */
export interface InlineQueryResultAudio {
  _: 'inlineQueryResultAudio'
  /** Unique identifier of the query result */
  id: string
  /** Audio file */
  audio: Audio
}

/** Represents a document */
export interface InlineQueryResultDocument {
  _: 'inlineQueryResultDocument'
  /** Unique identifier of the query result */
  id: string
  /** Document */
  document: Document
  /** Document title */
  title: string
  /** Document description */
  description: string
}

/** Represents a photo */
export interface InlineQueryResultPhoto {
  _: 'inlineQueryResultPhoto'
  /** Unique identifier of the query result */
  id: string
  /** Photo */
  photo: Photo
  /** Title of the result, if known */
  title: string
  /** A short description of the result, if known */
  description: string
}

/** Represents a sticker */
export interface InlineQueryResultSticker {
  _: 'inlineQueryResultSticker'
  /** Unique identifier of the query result */
  id: string
  /** Sticker */
  sticker: Sticker
}

/** Represents a video */
export interface InlineQueryResultVideo {
  _: 'inlineQueryResultVideo'
  /** Unique identifier of the query result */
  id: string
  /** Video */
  video: Video
  /** Title of the video */
  title: string
  /** Description of the video */
  description: string
}

/** Represents a voice note */
export interface InlineQueryResultVoiceNote {
  _: 'inlineQueryResultVoiceNote'
  /** Unique identifier of the query result */
  id: string
  /** Voice note */
  voiceNote: VoiceNote
  /** Title of the voice note */
  title: string
}
