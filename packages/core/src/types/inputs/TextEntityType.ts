/** Represents a part of the text which must be formatted differently */
export type TextEntityTypeInputUnion = TextEntityTypeMentionInput
  | TextEntityTypeHashtagInput
  | TextEntityTypeCashtagInput
  | TextEntityTypeBotCommandInput
  | TextEntityTypeUrlInput
  | TextEntityTypeEmailAddressInput
  | TextEntityTypePhoneNumberInput
  | TextEntityTypeBankCardNumberInput
  | TextEntityTypeBoldInput
  | TextEntityTypeItalicInput
  | TextEntityTypeUnderlineInput
  | TextEntityTypeStrikethroughInput
  | TextEntityTypeSpoilerInput
  | TextEntityTypeCodeInput
  | TextEntityTypePreInput
  | TextEntityTypePreCodeInput
  | TextEntityTypeTextUrlInput
  | TextEntityTypeMentionNameInput
  | TextEntityTypeMediaTimestampInput

/** A mention of a user by their username */
export interface TextEntityTypeMentionInput {
  _: 'textEntityTypeMention'
}

/** A hashtag text, beginning with "#" */
export interface TextEntityTypeHashtagInput {
  _: 'textEntityTypeHashtag'
}

/**
 * A cashtag text, beginning with "$" and consisting of capital English letters (e.g.,
 * "$USD")
 */
export interface TextEntityTypeCashtagInput {
  _: 'textEntityTypeCashtag'
}

/** A bot command, beginning with "/" */
export interface TextEntityTypeBotCommandInput {
  _: 'textEntityTypeBotCommand'
}

/** An HTTP URL */
export interface TextEntityTypeUrlInput {
  _: 'textEntityTypeUrl'
}

/** An email address */
export interface TextEntityTypeEmailAddressInput {
  _: 'textEntityTypeEmailAddress'
}

/** A phone number */
export interface TextEntityTypePhoneNumberInput {
  _: 'textEntityTypePhoneNumber'
}

/**
 * A bank card number. The getBankCardInfo method can be used to get information about
 * the bank card
 */
export interface TextEntityTypeBankCardNumberInput {
  _: 'textEntityTypeBankCardNumber'
}

/** A bold text */
export interface TextEntityTypeBoldInput {
  _: 'textEntityTypeBold'
}

/** An italic text */
export interface TextEntityTypeItalicInput {
  _: 'textEntityTypeItalic'
}

/** An underlined text */
export interface TextEntityTypeUnderlineInput {
  _: 'textEntityTypeUnderline'
}

/** A strikethrough text */
export interface TextEntityTypeStrikethroughInput {
  _: 'textEntityTypeStrikethrough'
}

/** A spoiler text. Not supported in secret chats */
export interface TextEntityTypeSpoilerInput {
  _: 'textEntityTypeSpoiler'
}

/** Text that must be formatted as if inside a code HTML tag */
export interface TextEntityTypeCodeInput {
  _: 'textEntityTypeCode'
}

/** Text that must be formatted as if inside a pre HTML tag */
export interface TextEntityTypePreInput {
  _: 'textEntityTypePre'
}

/** Text that must be formatted as if inside pre, and code HTML tags */
export interface TextEntityTypePreCodeInput {
  _: 'textEntityTypePreCode'
  /** Programming language of the code; as defined by the sender */
  language?: string
}

/** A text description shown instead of a raw URL */
export interface TextEntityTypeTextUrlInput {
  _: 'textEntityTypeTextUrl'
  /** HTTP or tg:// URL to be opened when the link is clicked */
  url?: string
}

/** A text shows instead of a raw mention of the user (e.g., when the user has no username) */
export interface TextEntityTypeMentionNameInput {
  _: 'textEntityTypeMentionName'
  /** Identifier of the mentioned user */
  userId?: number
}

/** A media timestamp */
export interface TextEntityTypeMediaTimestampInput {
  _: 'textEntityTypeMediaTimestamp'
  /**
   * Timestamp from which a video/audio/video note/voice note playing must start, in seconds.
   * The media can be in the content or the web page preview of the current message, or
   * in the same places in the replied message
   */
  mediaTimestamp?: number
}
