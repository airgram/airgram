/** Represents a part of the text which must be formatted differently */
export type TextEntityTypeUnion = TextEntityTypeMention
  | TextEntityTypeHashtag
  | TextEntityTypeCashtag
  | TextEntityTypeBotCommand
  | TextEntityTypeUrl
  | TextEntityTypeEmailAddress
  | TextEntityTypePhoneNumber
  | TextEntityTypeBankCardNumber
  | TextEntityTypeBold
  | TextEntityTypeItalic
  | TextEntityTypeUnderline
  | TextEntityTypeStrikethrough
  | TextEntityTypeSpoiler
  | TextEntityTypeCode
  | TextEntityTypePre
  | TextEntityTypePreCode
  | TextEntityTypeTextUrl
  | TextEntityTypeMentionName
  | TextEntityTypeMediaTimestamp

/** A mention of a user by their username */
export interface TextEntityTypeMention {
  _: 'textEntityTypeMention'
}

/** A hashtag text, beginning with "#" */
export interface TextEntityTypeHashtag {
  _: 'textEntityTypeHashtag'
}

/**
 * A cashtag text, beginning with "$" and consisting of capital English letters (e.g.,
 * "$USD")
 */
export interface TextEntityTypeCashtag {
  _: 'textEntityTypeCashtag'
}

/** A bot command, beginning with "/" */
export interface TextEntityTypeBotCommand {
  _: 'textEntityTypeBotCommand'
}

/** An HTTP URL */
export interface TextEntityTypeUrl {
  _: 'textEntityTypeUrl'
}

/** An email address */
export interface TextEntityTypeEmailAddress {
  _: 'textEntityTypeEmailAddress'
}

/** A phone number */
export interface TextEntityTypePhoneNumber {
  _: 'textEntityTypePhoneNumber'
}

/**
 * A bank card number. The getBankCardInfo method can be used to get information about
 * the bank card
 */
export interface TextEntityTypeBankCardNumber {
  _: 'textEntityTypeBankCardNumber'
}

/** A bold text */
export interface TextEntityTypeBold {
  _: 'textEntityTypeBold'
}

/** An italic text */
export interface TextEntityTypeItalic {
  _: 'textEntityTypeItalic'
}

/** An underlined text */
export interface TextEntityTypeUnderline {
  _: 'textEntityTypeUnderline'
}

/** A strikethrough text */
export interface TextEntityTypeStrikethrough {
  _: 'textEntityTypeStrikethrough'
}

/** A spoiler text. Not supported in secret chats */
export interface TextEntityTypeSpoiler {
  _: 'textEntityTypeSpoiler'
}

/** Text that must be formatted as if inside a code HTML tag */
export interface TextEntityTypeCode {
  _: 'textEntityTypeCode'
}

/** Text that must be formatted as if inside a pre HTML tag */
export interface TextEntityTypePre {
  _: 'textEntityTypePre'
}

/** Text that must be formatted as if inside pre, and code HTML tags */
export interface TextEntityTypePreCode {
  _: 'textEntityTypePreCode'
  /** Programming language of the code; as defined by the sender */
  language: string
}

/** A text description shown instead of a raw URL */
export interface TextEntityTypeTextUrl {
  _: 'textEntityTypeTextUrl'
  /** HTTP or tg:// URL to be opened when the link is clicked */
  url: string
}

/** A text shows instead of a raw mention of the user (e.g., when the user has no username) */
export interface TextEntityTypeMentionName {
  _: 'textEntityTypeMentionName'
  /** Identifier of the mentioned user */
  userId: number
}

/** A media timestamp */
export interface TextEntityTypeMediaTimestamp {
  _: 'textEntityTypeMediaTimestamp'
  /**
   * Timestamp from which a video/audio/video note/voice note playing must start, in seconds.
   * The media can be in the content or the web page preview of the current message, or
   * in the same places in the replied message
   */
  mediaTimestamp: number
}
