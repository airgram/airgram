import {
  Contact,
  InputMessageContentUnion,
  Location,
  ReplyMarkupUnion,
  Venue
} from './index'

/** Represents a single result of an inline query; for bots only */
export type InputInlineQueryResultUnion = InputInlineQueryResultAnimatedGif
  | InputInlineQueryResultAnimatedMpeg4
  | InputInlineQueryResultArticle
  | InputInlineQueryResultAudio
  | InputInlineQueryResultContact
  | InputInlineQueryResultDocument
  | InputInlineQueryResultGame
  | InputInlineQueryResultLocation
  | InputInlineQueryResultPhoto
  | InputInlineQueryResultSticker
  | InputInlineQueryResultVenue
  | InputInlineQueryResultVideo
  | InputInlineQueryResultVoiceNote

/** Represents a link to an animated GIF */
export interface InputInlineQueryResultAnimatedGif {
  _: 'inputInlineQueryResultAnimatedGif'
  /** Unique identifier of the query result */
  id: string
  /** Title of the query result */
  title: string
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  thumbnailUrl: string
  /** The URL of the GIF-file (file size must not exceed 1MB) */
  gifUrl: string
  /** Duration of the GIF, in seconds */
  gifDuration: number
  /** Width of the GIF */
  gifWidth: number
  /** Height of the GIF */
  gifHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents a link to an animated (i.e. without sound) H.264/MPEG-4 AVC video */
export interface InputInlineQueryResultAnimatedMpeg4 {
  _: 'inputInlineQueryResultAnimatedMpeg4'
  /** Unique identifier of the query result */
  id: string
  /** Title of the result */
  title: string
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  thumbnailUrl: string
  /** The URL of the MPEG4-file (file size must not exceed 1MB) */
  mpeg4Url: string
  /** Duration of the video, in seconds */
  mpeg4Duration: number
  /** Width of the video */
  mpeg4Width: number
  /** Height of the video */
  mpeg4Height: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents a link to an article or web page */
export interface InputInlineQueryResultArticle {
  _: 'inputInlineQueryResultArticle'
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
  /** URL of the result thumbnail, if it exists */
  thumbnailUrl: string
  /** Thumbnail width, if known */
  thumbnailWidth: number
  /** Thumbnail height, if known */
  thumbnailHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents a link to an MP3 audio file */
export interface InputInlineQueryResultAudio {
  _: 'inputInlineQueryResultAudio'
  /** Unique identifier of the query result */
  id: string
  /** Title of the audio file */
  title: string
  /** Performer of the audio file */
  performer: string
  /** The URL of the audio file */
  audioUrl: string
  /** Audio file duration, in seconds */
  audioDuration: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAudio, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents a user contact */
export interface InputInlineQueryResultContact {
  _: 'inputInlineQueryResultContact'
  /** Unique identifier of the query result */
  id: string
  /** User contact */
  contact: Contact
  /** URL of the result thumbnail, if it exists */
  thumbnailUrl: string
  /** Thumbnail width, if known */
  thumbnailWidth: number
  /** Thumbnail height, if known */
  thumbnailHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents a link to a file */
export interface InputInlineQueryResultDocument {
  _: 'inputInlineQueryResultDocument'
  /** Unique identifier of the query result */
  id: string
  /** Title of the resulting file */
  title: string
  /** Short description of the result, if known */
  description: string
  /** URL of the file */
  documentUrl: string
  /**
   * MIME type of the file content; only "application/pdf" and "application/zip" are currently
   * allowed
   */
  mimeType: string
  /** The URL of the file thumbnail, if it exists */
  thumbnailUrl: string
  /** Width of the thumbnail */
  thumbnailWidth: number
  /** Height of the thumbnail */
  thumbnailHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageDocument, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents a game */
export interface InputInlineQueryResultGame {
  _: 'inputInlineQueryResultGame'
  /** Unique identifier of the query result */
  id: string
  /** Short name of the game */
  gameShortName: string
  /** Message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
}

/** Represents a point on the map */
export interface InputInlineQueryResultLocation {
  _: 'inputInlineQueryResultLocation'
  /** Unique identifier of the query result */
  id: string
  /** Location result */
  location: Location
  /**
   * Amount of time relative to the message sent time until the location can be updated,
   * in seconds
   */
  livePeriod: number
  /** Title of the result */
  title: string
  /** URL of the result thumbnail, if it exists */
  thumbnailUrl: string
  /** Thumbnail width, if known */
  thumbnailWidth: number
  /** Thumbnail height, if known */
  thumbnailHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents link to a JPEG image */
export interface InputInlineQueryResultPhoto {
  _: 'inputInlineQueryResultPhoto'
  /** Unique identifier of the query result */
  id: string
  /** Title of the result, if known */
  title: string
  /** A short description of the result, if known */
  description: string
  /** URL of the photo thumbnail, if it exists */
  thumbnailUrl: string
  /** The URL of the JPEG photo (photo size must not exceed 5MB) */
  photoUrl: string
  /** Width of the photo */
  photoWidth: number
  /** Height of the photo */
  photoHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessagePhoto, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents a link to a WEBP sticker */
export interface InputInlineQueryResultSticker {
  _: 'inputInlineQueryResultSticker'
  /** Unique identifier of the query result */
  id: string
  /** URL of the sticker thumbnail, if it exists */
  thumbnailUrl: string
  /** The URL of the WEBP sticker (sticker file size must not exceed 5MB) */
  stickerUrl: string
  /** Width of the sticker */
  stickerWidth: number
  /** Height of the sticker */
  stickerHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * inputMessageSticker, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents information about a venue */
export interface InputInlineQueryResultVenue {
  _: 'inputInlineQueryResultVenue'
  /** Unique identifier of the query result */
  id: string
  /** Venue result */
  venue: Venue
  /** URL of the result thumbnail, if it exists */
  thumbnailUrl: string
  /** Thumbnail width, if known */
  thumbnailWidth: number
  /** Thumbnail height, if known */
  thumbnailHeight: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/** Represents a link to a page containing an embedded video player or a video file */
export interface InputInlineQueryResultVideo {
  _: 'inputInlineQueryResultVideo'
  /** Unique identifier of the query result */
  id: string
  /** Title of the result */
  title: string
  /** A short description of the result, if known */
  description: string
  /** The URL of the video thumbnail (JPEG), if it exists */
  thumbnailUrl: string
  /** URL of the embedded video player or video file */
  videoUrl: string
  /**
   * MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently
   * supported
   */
  mimeType: string
  /** Width of the video */
  videoWidth: number
  /** Height of the video */
  videoHeight: number
  /** Video duration, in seconds */
  videoDuration: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVideo, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}

/**
 * Represents a link to an opus-encoded audio file within an OGG container, single channel
 * audio
 */
export interface InputInlineQueryResultVoiceNote {
  _: 'inputInlineQueryResultVoiceNote'
  /** Unique identifier of the query result */
  id: string
  /** Title of the voice note */
  title: string
  /** The URL of the voice note file */
  voiceNoteUrl: string
  /** Duration of the voice note, in seconds */
  voiceNoteDuration: number
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  replyMarkup?: ReplyMarkupUnion
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVoiceNote, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  inputMessageContent: InputMessageContentUnion
}
