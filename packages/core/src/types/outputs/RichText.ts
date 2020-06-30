import { Document } from './index'

/** Describes a text object inside an instant-view web page */
export type RichTextUnion = RichTextPlain
  | RichTextBold
  | RichTextItalic
  | RichTextUnderline
  | RichTextStrikethrough
  | RichTextFixed
  | RichTextUrl
  | RichTextEmailAddress
  | RichTextSubscript
  | RichTextSuperscript
  | RichTextMarked
  | RichTextPhoneNumber
  | RichTextIcon
  | RichTextReference
  | RichTextAnchor
  | RichTextAnchorLink
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

/** A strikethrough rich text */
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
  /** True, if the URL has cached instant view server-side */
  isCached: boolean
}

/** A rich text email link */
export interface RichTextEmailAddress {
  _: 'richTextEmailAddress'
  /** Text */
  text: RichTextUnion
  /** Email address */
  emailAddress: string
}

/** A subscript rich text */
export interface RichTextSubscript {
  _: 'richTextSubscript'
  /** Text */
  text: RichTextUnion
}

/** A superscript rich text */
export interface RichTextSuperscript {
  _: 'richTextSuperscript'
  /** Text */
  text: RichTextUnion
}

/** A marked rich text */
export interface RichTextMarked {
  _: 'richTextMarked'
  /** Text */
  text: RichTextUnion
}

/** A rich text phone number */
export interface RichTextPhoneNumber {
  _: 'richTextPhoneNumber'
  /** Text */
  text: RichTextUnion
  /** Phone number */
  phoneNumber: string
}

/** A small image inside the text */
export interface RichTextIcon {
  _: 'richTextIcon'
  /** The image represented as a document. The image can be in GIF, JPEG or PNG format */
  document: Document
  /** Width of a bounding box in which the image should be shown; 0 if unknown */
  width: number
  /** Height of a bounding box in which the image should be shown; 0 if unknown */
  height: number
}

/** A rich text reference of a text on the same web page */
export interface RichTextReference {
  _: 'richTextReference'
  /** The text */
  text: RichTextUnion
  /** The text to show on click */
  referenceText: RichTextUnion
  /** An HTTP URL, opening the reference */
  url: string
}

/** An anchor */
export interface RichTextAnchor {
  _: 'richTextAnchor'
  /** Anchor name */
  name: string
}

/** A link to an anchor on the same web page */
export interface RichTextAnchorLink {
  _: 'richTextAnchorLink'
  /** The link text */
  text: RichTextUnion
  /** The anchor name. If the name is empty, the link should bring back to top */
  name: string
  /** An HTTP URL, opening the anchor */
  url: string
}

/** A concatenation of rich texts */
export interface RichTexts {
  _: 'richTexts'
  /** Texts */
  texts: RichTextUnion[]
}
