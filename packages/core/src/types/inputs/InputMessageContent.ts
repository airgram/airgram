import {
  ContactInput,
  FormattedTextInput,
  InputFileInputUnion,
  InputThumbnailInput,
  InvoiceInput,
  LocationInput,
  VenueInput
} from './index'

/** The content of a message to send */
export type InputMessageContentInputUnion = InputMessageTextInput
  | InputMessageAnimationInput
  | InputMessageAudioInput
  | InputMessageDocumentInput
  | InputMessagePhotoInput
  | InputMessageStickerInput
  | InputMessageVideoInput
  | InputMessageVideoNoteInput
  | InputMessageVoiceNoteInput
  | InputMessageLocationInput
  | InputMessageVenueInput
  | InputMessageContactInput
  | InputMessageGameInput
  | InputMessageInvoiceInput
  | InputMessagePollInput
  | InputMessageForwardedInput

/** A text message */
export interface InputMessageTextInput {
  _: 'inputMessageText'
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Code, Pre, PreCode and TextUrl entities are allowed to be specified
   * manually
   */
  text?: FormattedTextInput
  /** True, if rich web page previews for URLs in the message text should be disabled */
  disableWebPagePreview?: boolean
  /** True, if a chat message draft should be deleted */
  clearDraft?: boolean
}

/** An animation message (GIF-style). */
export interface InputMessageAnimationInput {
  _: 'inputMessageAnimation'
  /** Animation file to be sent */
  animation?: InputFileInputUnion
  /** Animation thumbnail, if available */
  thumbnail?: InputThumbnailInput
  /** Duration of the animation, in seconds */
  duration?: number
  /** Width of the animation; may be replaced by the server */
  width?: number
  /** Height of the animation; may be replaced by the server */
  height?: number
  /** Animation caption; 0-GetOption("message_caption_length_max") characters */
  caption?: FormattedTextInput
}

/** An audio message */
export interface InputMessageAudioInput {
  _: 'inputMessageAudio'
  /** Audio file to be sent */
  audio?: InputFileInputUnion
  /** Thumbnail of the cover for the album, if available */
  albumCoverThumbnail?: InputThumbnailInput
  /** Duration of the audio, in seconds; may be replaced by the server */
  duration?: number
  /** Title of the audio; 0-64 characters; may be replaced by the server */
  title?: string
  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  performer?: string
  /** Audio caption; 0-GetOption("message_caption_length_max") characters */
  caption?: FormattedTextInput
}

/** A document message (general file) */
export interface InputMessageDocumentInput {
  _: 'inputMessageDocument'
  /** Document to be sent */
  document?: InputFileInputUnion
  /** Document thumbnail, if available */
  thumbnail?: InputThumbnailInput
  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  caption?: FormattedTextInput
}

/** A photo message */
export interface InputMessagePhotoInput {
  _: 'inputMessagePhoto'
  /** Photo to send */
  photo?: InputFileInputUnion
  /** Photo thumbnail to be sent, this is sent to the other party in secret chats only */
  thumbnail?: InputThumbnailInput
  /** File identifiers of the stickers added to the photo, if applicable */
  addedStickerFileIds?: number[]
  /** Photo width */
  width?: number
  /** Photo height */
  height?: number
  /** Photo caption; 0-GetOption("message_caption_length_max") characters */
  caption?: FormattedTextInput
  /**
   * Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl?: number
}

/** A sticker message */
export interface InputMessageStickerInput {
  _: 'inputMessageSticker'
  /** Sticker to be sent */
  sticker?: InputFileInputUnion
  /** Sticker thumbnail, if available */
  thumbnail?: InputThumbnailInput
  /** Sticker width */
  width?: number
  /** Sticker height */
  height?: number
}

/** A video message */
export interface InputMessageVideoInput {
  _: 'inputMessageVideo'
  /** Video to be sent */
  video?: InputFileInputUnion
  /** Video thumbnail, if available */
  thumbnail?: InputThumbnailInput
  /** File identifiers of the stickers added to the video, if applicable */
  addedStickerFileIds?: number[]
  /** Duration of the video, in seconds */
  duration?: number
  /** Video width */
  width?: number
  /** Video height */
  height?: number
  /** True, if the video should be tried to be streamed */
  supportsStreaming?: boolean
  /** Video caption; 0-GetOption("message_caption_length_max") characters */
  caption?: FormattedTextInput
  /**
   * Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl?: number
}

/** A video note message */
export interface InputMessageVideoNoteInput {
  _: 'inputMessageVideoNote'
  /** Video note to be sent */
  videoNote?: InputFileInputUnion
  /** Video thumbnail, if available */
  thumbnail?: InputThumbnailInput
  /** Duration of the video, in seconds */
  duration?: number
  /** Video width and height; must be positive and not greater than 640 */
  length?: number
}

/** A voice note message */
export interface InputMessageVoiceNoteInput {
  _: 'inputMessageVoiceNote'
  /** Voice note to be sent */
  voiceNote?: InputFileInputUnion
  /** Duration of the voice note, in seconds */
  duration?: number
  /** Waveform representation of the voice note, in 5-bit format */
  waveform?: string
  /** Voice note caption; 0-GetOption("message_caption_length_max") characters */
  caption?: FormattedTextInput
}

/** A message with a location */
export interface InputMessageLocationInput {
  _: 'inputMessageLocation'
  /** Location to be sent */
  location?: LocationInput
  /**
   * Period for which the location can be updated, in seconds; should bebetween 60 and
   * 86400 for a live location and 0 otherwise
   */
  livePeriod?: number
}

/** A message with information about a venue */
export interface InputMessageVenueInput {
  _: 'inputMessageVenue'
  /** Venue to send */
  venue?: VenueInput
}

/** A message containing a user contact */
export interface InputMessageContactInput {
  _: 'inputMessageContact'
  /** Contact to send */
  contact?: ContactInput
}

/** A message with a game; not supported for channels or secret chats */
export interface InputMessageGameInput {
  _: 'inputMessageGame'
  /** User identifier of the bot that owns the game */
  botUserId?: number
  /** Short name of the game */
  gameShortName?: string
}

/** A message with an invoice; can be used only by bots and only in private chats */
export interface InputMessageInvoiceInput {
  _: 'inputMessageInvoice'
  /** Invoice */
  invoice?: InvoiceInput
  /** Product title; 1-32 characters */
  title?: string
  /** Product description; 0-255 characters */
  description?: string
  /** Product photo URL; optional */
  photoUrl?: string
  /** Product photo size */
  photoSize?: number
  /** Product photo width */
  photoWidth?: number
  /** Product photo height */
  photoHeight?: number
  /** The invoice payload */
  payload?: string
  /** Payment provider token */
  providerToken?: string
  /** JSON-encoded data about the invoice, which will be shared with the payment provider */
  providerData?: string
  /** Unique invoice bot start_parameter for the generation of this invoice */
  startParameter?: string
}

/** A message with a poll. Polls can't be sent to private or secret chats */
export interface InputMessagePollInput {
  _: 'inputMessagePoll'
  /** Poll question, 1-255 characters */
  question?: string
  /** List of poll answer options, 2-10 strings 1-100 characters each */
  options?: string[]
}

/** A forwarded message */
export interface InputMessageForwardedInput {
  _: 'inputMessageForwarded'
  /** Identifier for the chat this forwarded message came from */
  fromChatId?: number
  /** Identifier of the message to forward */
  messageId?: number
  /**
   * True, if a game message should be shared within a launched game; applies only to
   * game messages
   */
  inGameShare?: boolean
  /**
   * True, if content of the message needs to be copied without a link to the original
   * message. Always true if the message is forwarded to a secret chat
   */
  sendCopy?: boolean
  /**
   * True, if media caption of the message copy needs to be removed. Ignored if send_copy
   * is false
   */
  removeCaption?: boolean
}
