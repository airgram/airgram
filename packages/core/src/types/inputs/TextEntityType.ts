/** Represents a part of the text which must be formatted differently */
export type TextEntityTypeInputUnion = TextEntityTypeMentionInput
  | TextEntityTypeHashtagInput
  | TextEntityTypeCashtagInput
  | TextEntityTypeBotCommandInput
  | TextEntityTypeUrlInput
  | TextEntityTypeEmailAddressInput
  | TextEntityTypeBoldInput
  | TextEntityTypeItalicInput
  | TextEntityTypeCodeInput
  | TextEntityTypePreInput
  | TextEntityTypePreCodeInput
  | TextEntityTypeTextUrlInput
  | TextEntityTypeMentionNameInput
  | TextEntityTypePhoneNumberInput

/** A mention of a user by their username */
export interface TextEntityTypeMentionInput {
  _: 'textEntityTypeMention'
}

/** A hashtag text, beginning with "#" */
export interface TextEntityTypeHashtagInput {
  _: 'textEntityTypeHashtag'
}

/**
 * A cashtag text, beginning with "$" and consisting of capital english letters (i.e.
 * "$USD")
 */
export interface TextEntityTypeCashtagInput {
  _: 'textEntityTypeCashtag'
}

/**
 * A bot command, beginning with "/". This shouldn't be highlighted if there are no
 * bots in the chat
 */
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

/** A bold text */
export interface TextEntityTypeBoldInput {
  _: 'textEntityTypeBold'
}

/** An italic text */
export interface TextEntityTypeItalicInput {
  _: 'textEntityTypeItalic'
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

/** A phone number */
export interface TextEntityTypePhoneNumberInput {
  _: 'textEntityTypePhoneNumber'
}
