import {
  Contact,
  FormattedText,
  InputFileUnion,
  InputThumbnail,
  Invoice,
  Location,
  MessageCopyOptions,
  PollTypeUnion,
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
  | InputMessageDice
  | InputMessageGame
  | InputMessageInvoice
  | InputMessagePoll
  | InputMessageForwarded

/** A text message */
export interface InputMessageText {
  _: 'inputMessageText'
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Underline, Strikethrough, Spoiler, Code, Pre, PreCode, TextUrl and
   * MentionName entities are allowed to be specified manually
   */
  text: FormattedText
  /** True, if rich web page previews for URLs in the message text must be disabled */
  disableWebPagePreview: boolean
  /** True, if a chat message draft must be deleted */
  clearDraft: boolean
}

/** An animation message (GIF-style). */
export interface InputMessageAnimation {
  _: 'inputMessageAnimation'
  /** Animation file to be sent */
  animation: InputFileUnion
  /** Animation thumbnail; pass null to skip thumbnail uploading */
  thumbnail: InputThumbnail
  /** File identifiers of the stickers added to the animation, if applicable */
  addedStickerFileIds: number[]
  /** Duration of the animation, in seconds */
  duration: number
  /** Width of the animation; may be replaced by the server */
  width: number
  /** Height of the animation; may be replaced by the server */
  height: number
  /**
   * Animation caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption: FormattedText
}

/** An audio message */
export interface InputMessageAudio {
  _: 'inputMessageAudio'
  /** Audio file to be sent */
  audio: InputFileUnion
  /** Thumbnail of the cover for the album; pass null to skip thumbnail uploading */
  albumCoverThumbnail: InputThumbnail
  /** Duration of the audio, in seconds; may be replaced by the server */
  duration: number
  /** Title of the audio; 0-64 characters; may be replaced by the server */
  title: string
  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  performer: string
  /**
   * Audio caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption: FormattedText
}

/** A document message (general file) */
export interface InputMessageDocument {
  _: 'inputMessageDocument'
  /** Document to be sent */
  document: InputFileUnion
  /** Document thumbnail; pass null to skip thumbnail uploading */
  thumbnail: InputThumbnail
  /**
   * If true, automatic file type detection will be disabled and the document will be
   * always sent as file. Always true for files sent to secret chats
   */
  disableContentTypeDetection: boolean
  /**
   * Document caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption: FormattedText
}

/** A photo message */
export interface InputMessagePhoto {
  _: 'inputMessagePhoto'
  /** Photo to send */
  photo: InputFileUnion
  /**
   * Photo thumbnail to be sent; pass null to skip thumbnail uploading. The thumbnail
   * is sent to the other party only in secret chats
   */
  thumbnail: InputThumbnail
  /** File identifiers of the stickers added to the photo, if applicable */
  addedStickerFileIds: number[]
  /** Photo width */
  width: number
  /** Photo height */
  height: number
  /**
   * Photo caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
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
  /** Sticker thumbnail; pass null to skip thumbnail uploading */
  thumbnail: InputThumbnail
  /** Sticker width */
  width: number
  /** Sticker height */
  height: number
  /** Emoji used to choose the sticker */
  emoji: string
}

/** A video message */
export interface InputMessageVideo {
  _: 'inputMessageVideo'
  /** Video to be sent */
  video: InputFileUnion
  /** Video thumbnail; pass null to skip thumbnail uploading */
  thumbnail: InputThumbnail
  /** File identifiers of the stickers added to the video, if applicable */
  addedStickerFileIds: number[]
  /** Duration of the video, in seconds */
  duration: number
  /** Video width */
  width: number
  /** Video height */
  height: number
  /** True, if the video is supposed to be streamed */
  supportsStreaming: boolean
  /**
   * Video caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
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
  /** Video thumbnail; pass null to skip thumbnail uploading */
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
  /**
   * Voice note caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  caption: FormattedText
}

/** A message with a location */
export interface InputMessageLocation {
  _: 'inputMessageLocation'
  /** Location to be sent */
  location: Location
  /**
   * Period for which the location can be updated, in seconds; must be between 60 and
   * 86400 for a live location and 0 otherwise
   */
  livePeriod: number
  /**
   * For live locations, a direction in which the location moves, in degrees; 1-360. Pass
   * 0 if unknown
   */
  heading: number
  /**
   * For live locations, a maximum distance to another chat member for proximity alerts,
   * in meters (0-100000). Pass 0 if the notification is disabled. Can't be enabled in
   * channels and Saved Messages
   */
  proximityAlertRadius: number
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

/** A dice message */
export interface InputMessageDice {
  _: 'inputMessageDice'
  /** Emoji on which the dice throw animation is based */
  emoji: string
  /** True, if the chat message draft must be deleted */
  clearDraft: boolean
}

/** A message with a game; not supported for channels or secret chats */
export interface InputMessageGame {
  _: 'inputMessageGame'
  /** User identifier of the bot that owns the game */
  botUserId: number
  /** Short name of the game */
  gameShortName: string
}

/** A message with an invoice; can be used only by bots */
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
  /**
   * Unique invoice bot deep link parameter for the generation of this invoice. If empty,
   * it would be possible to pay directly from forwards of the invoice message
   */
  startParameter: string
}

/**
 * A message with a poll. Polls can't be sent to secret chats. Polls can be sent only
 * to a private chat with a bot
 */
export interface InputMessagePoll {
  _: 'inputMessagePoll'
  /** Poll question; 1-255 characters (up to 300 characters for bots) */
  question: string
  /** List of poll answer options, 2-10 strings 1-100 characters each */
  options: string[]
  /**
   * True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded
   * to channels
   */
  isAnonymous: boolean
  /** Type of the poll */
  type: PollTypeUnion
  /** Amount of time the poll will be active after creation, in seconds; for bots only */
  openPeriod: number
  /**
   * Point in time (Unix timestamp) when the poll will automatically be closed; for bots
   * only
   */
  closeDate: number
  /** True, if the poll needs to be sent already closed; for bots only */
  isClosed: boolean
}

/** A forwarded message */
export interface InputMessageForwarded {
  _: 'inputMessageForwarded'
  /** Identifier for the chat this forwarded message came from */
  fromChatId: number
  /** Identifier of the message to forward */
  messageId: number
  /**
   * True, if a game message is being shared from a launched game; applies only to game
   * messages
   */
  inGameShare: boolean
  /**
   * Options to be used to copy content of the message without reference to the original
   * sender; pass null to forward the message as usual
   */
  copyOptions: MessageCopyOptions
}
