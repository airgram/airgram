/** Describes a text object inside an instant-view web page */
export type RichTextUnion = RichTextPlain
  | RichTextBold
  | RichTextItalic
  | RichTextUnderline
  | RichTextStrikethrough
  | RichTextFixed
  | RichTextUrl
  | RichTextEmailAddress
  | RichTexts

/** A plain text */
export interface RichTextPlain {
  _: 'richTextPlain'
  /** Text */
  text: string
}

/** A bold rich text */
export interface RichTextBold {
  _: 'richTextBold'
  /** Text */
  text: RichTextUnion
}

/** An italicized rich text */
export interface RichTextItalic {
  _: 'richTextItalic'
  /** Text */
  text: RichTextUnion
}

/** An underlined rich text */
export interface RichTextUnderline {
  _: 'richTextUnderline'
  /** Text */
  text: RichTextUnion
}

/** A strike-through rich text */
export interface RichTextStrikethrough {
  _: 'richTextStrikethrough'
  /** Text */
  text: RichTextUnion
}

/** A fixed-width rich text */
export interface RichTextFixed {
  _: 'richTextFixed'
  /** Text */
  text: RichTextUnion
}

/** A rich text URL link */
export interface RichTextUrl {
  _: 'richTextUrl'
  /** Text */
  text: RichTextUnion
  /** URL */
  url: string
}

/** A rich text email link */
export interface RichTextEmailAddress {
  _: 'richTextEmailAddress'
  /** Text */
  text: RichTextUnion
  /** Email address */
  emailAddress: string
}

/** A concatenation of rich texts */
export interface RichTexts {
  _: 'richTexts'
  /** Texts */
  texts: RichTextUnion[]
}
