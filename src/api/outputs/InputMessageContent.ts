import {
  Contact,
  FormattedText,
  InputFileUnion,
  InputThumbnail,
  Invoice,
  Location,
  Venue
} from './index'

/** The content of a message to send */
export type InputMessageContentUnion = InputMessageText
  | InputMessageAnimation
  | InputMessageAudio
  | InputMessageDocument
  | InputMessagePhoto
  | InputMessageSticker
  | InputMessageVideo
  | InputMessageVideoNote
  | InputMessageVoiceNote
  | InputMessageLocation
  | InputMessageVenue
  | InputMessageContact
  | InputMessageGame
  | InputMessageInvoice
  | InputMessageForwarded

/** A text message */
export interface InputMessageText {
  _: 'inputMessageText'
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Code, Pre, PreCode and TextUrl entities are allowed to be specified
   * manually
   */
  text: FormattedText
  /** True, if rich web page previews for URLs in the message text should be disabled */
  disableWebPagePreview: boolean
  /** True, if a chat message draft should be deleted */
  clearDraft: boolean
}

/** An animation message (GIF-style). */
export interface InputMessageAnimation {
  _: 'inputMessageAnimation'
  /** Animation file to be sent */
  animation: InputFileUnion
  /** Animation thumbnail, if available */
  thumbnail: InputThumbnail
  /** Duration of the animation, in seconds */
  duration: number
  /** Width of the animation; may be replaced by the server */
  width: number
  /** Height of the animation; may be replaced by the server */
  height: number
  /** Animation caption; 0-GetOption("message_caption_length_max") characters */
  caption: FormattedText
}

/** An audio message */
export interface InputMessageAudio {
  _: 'inputMessageAudio'
  /** Audio file to be sent */
  audio: InputFileUnion
  /** Thumbnail of the cover for the album, if available */
  albumCoverThumbnail: InputThumbnail
  /** Duration of the audio, in seconds; may be replaced by the server */
  duration: number
  /** Title of the audio; 0-64 characters; may be replaced by the server */
  title: string
  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  performer: string
  /** Audio caption; 0-GetOption("message_caption_length_max") characters */
  caption: FormattedText
}

/** A document message (general file) */
export interface InputMessageDocument {
  _: 'inputMessageDocument'
  /** Document to be sent */
  document: InputFileUnion
  /** Document thumbnail, if available */
  thumbnail: InputThumbnail
  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  caption: FormattedText
}

/** A photo message */
export interface InputMessagePhoto {
  _: 'inputMessagePhoto'
  /** Photo to send */
  photo: InputFileUnion
  /** Photo thumbnail to be sent, this is sent to the other party in secret chats only */
  thumbnail: InputThumbnail
  /** File identifiers of the stickers added to the photo, if applicable */
  addedStickerFileIds: number[]
  /** Photo width */
  width: number
  /** Photo height */
  height: number
  /** Photo caption; 0-GetOption("message_caption_length_max") characters */
  caption: FormattedText
  /**
   * Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl: number
}

/** A sticker message */
export interface InputMessageSticker {
  _: 'inputMessageSticker'
  /** Sticker to be sent */
  sticker: InputFileUnion
  /** Sticker thumbnail, if available */
  thumbnail: InputThumbnail
  /** Sticker width */
  width: number
  /** Sticker height */
  height: number
}

/** A video message */
export interface InputMessageVideo {
  _: 'inputMessageVideo'
  /** Video to be sent */
  video: InputFileUnion
  /** Video thumbnail, if available */
  thumbnail: InputThumbnail
  /** File identifiers of the stickers added to the video, if applicable */
  addedStickerFileIds: number[]
  /** Duration of the video, in seconds */
  duration: number
  /** Video width */
  width: number
  /** Video height */
  height: number
  /** True, if the video should be tried to be streamed */
  supportsStreaming: boolean
  /** Video caption; 0-GetOption("message_caption_length_max") characters */
  caption: FormattedText
  /**
   * Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl: number
}

/** A video note message */
export interface InputMessageVideoNote {
  _: 'inputMessageVideoNote'
  /** Video note to be sent */
  videoNote: InputFileUnion
  /** Video thumbnail, if available */
  thumbnail: InputThumbnail
  /** Duration of the video, in seconds */
  duration: number
  /** Video width and height; must be positive and not greater than 640 */
  length: number
}

/** A voice note message */
export interface InputMessageVoiceNote {
  _: 'inputMessageVoiceNote'
  /** Voice note to be sent */
  voiceNote: InputFileUnion
  /** Duration of the voice note, in seconds */
  duration: number
  /** Waveform representation of the voice note, in 5-bit format */
  waveform: string
  /** Voice note caption; 0-GetOption("message_caption_length_max") characters */
  caption: FormattedText
}

/** A message with a location */
export interface InputMessageLocation {
  _: 'inputMessageLocation'
  /** Location to be sent */
  location: Location
  /**
   * Period for which the location can be updated, in seconds; should bebetween 60 and
   * 86400 for a live location and 0 otherwise
   */
  livePeriod: number
}

/** A message with information about a venue */
export interface InputMessageVenue {
  _: 'inputMessageVenue'
  /** Venue to send */
  venue: Venue
}

/** A message containing a user contact */
export interface InputMessageContact {
  _: 'inputMessageContact'
  /** Contact to send */
  contact: Contact
}

/** A message with a game; not supported for channels or secret chats */
export interface InputMessageGame {
  _: 'inputMessageGame'
  /** User identifier of the bot that owns the game */
  botUserId: number
  /** Short name of the game */
  gameShortName: string
}

/** A message with an invoice; can be used only by bots and only in private chats */
export interface InputMessageInvoice {
  _: 'inputMessageInvoice'
  /** Invoice */
  invoice: Invoice
  /** Product title; 1-32 characters */
  title: string
  /** Product description; 0-255 characters */
  description: string
  /** Product photo URL; optional */
  photoUrl: string
  /** Product photo size */
  photoSize: number
  /** Product photo width */
  photoWidth: number
  /** Product photo height */
  photoHeight: number
  /** The invoice payload */
  payload: string
  /** Payment provider token */
  providerToken: string
  /** JSON-encoded data about the invoice, which will be shared with the payment provider */
  providerData: string
  /** Unique invoice bot start_parameter for the generation of this invoice */
  startParameter: string
}

/** A forwarded message */
export interface InputMessageForwarded {
  _: 'inputMessageForwarded'
  /** Identifier for the chat this forwarded message came from */
  fromChatId: number
  /** Identifier of the message to forward */
  messageId: number
  /**
   * True, if a game message should be shared within a launched game; applies only to
   * game messages
   */
  inGameShare: boolean
}
