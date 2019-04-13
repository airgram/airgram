import {
  Animation,
  Audio,
  ChatPhoto,
  Photo,
  RichTextUnion,
  Video
} from './index'

/** Describes a block of an instant view web page */
export type PageBlockUnion = PageBlockTitle
  | PageBlockSubtitle
  | PageBlockAuthorDate
  | PageBlockHeader
  | PageBlockSubheader
  | PageBlockParagraph
  | PageBlockPreformatted
  | PageBlockFooter
  | PageBlockDivider
  | PageBlockAnchor
  | PageBlockList
  | PageBlockBlockQuote
  | PageBlockPullQuote
  | PageBlockAnimation
  | PageBlockAudio
  | PageBlockPhoto
  | PageBlockVideo
  | PageBlockCover
  | PageBlockEmbedded
  | PageBlockEmbeddedPost
  | PageBlockCollage
  | PageBlockSlideshow
  | PageBlockChatLink

/** The title of a page */
export interface PageBlockTitle {
  _: 'pageBlockTitle'
  /** Title */
  title: RichTextUnion
}

/** The subtitle of a page */
export interface PageBlockSubtitle {
  _: 'pageBlockSubtitle'
  /** Subtitle */
  subtitle: RichTextUnion
}

/** The author and publishing date of a page */
export interface PageBlockAuthorDate {
  _: 'pageBlockAuthorDate'
  /** Author */
  author: RichTextUnion
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  publishDate: number
}

/** A header */
export interface PageBlockHeader {
  _: 'pageBlockHeader'
  /** Header */
  header: RichTextUnion
}

/** A subheader */
export interface PageBlockSubheader {
  _: 'pageBlockSubheader'
  /** Subheader */
  subheader: RichTextUnion
}

/** A text paragraph */
export interface PageBlockParagraph {
  _: 'pageBlockParagraph'
  /** Paragraph text */
  text: RichTextUnion
}

/** A preformatted text paragraph */
export interface PageBlockPreformatted {
  _: 'pageBlockPreformatted'
  /** Paragraph text */
  text: RichTextUnion
  /** Programming language for which the text should be formatted */
  language: string
}

/** The footer of a page */
export interface PageBlockFooter {
  _: 'pageBlockFooter'
  /** Footer */
  footer: RichTextUnion
}

/** An empty block separating a page */
export interface PageBlockDivider {
  _: 'pageBlockDivider'
}

/**
 * An invisible anchor on a page, which can be used in a URL to open the page from the
 * specified anchor
 */
export interface PageBlockAnchor {
  _: 'pageBlockAnchor'
  /** Name of the anchor */
  name: string
}

/** A list of texts */
export interface PageBlockList {
  _: 'pageBlockList'
  /** Texts */
  items: RichTextUnion[]
  /** True, if the items should be marked with numbers */
  isOrdered: boolean
}

/** A block quote */
export interface PageBlockBlockQuote {
  _: 'pageBlockBlockQuote'
  /** Quote text */
  text: RichTextUnion
  /** Quote caption */
  caption: RichTextUnion
}

/** A pull quote */
export interface PageBlockPullQuote {
  _: 'pageBlockPullQuote'
  /** Quote text */
  text: RichTextUnion
  /** Quote caption */
  caption: RichTextUnion
}

/** An animation */
export interface PageBlockAnimation {
  _: 'pageBlockAnimation'
  /** Animation file; may be null */
  animation?: Animation
  /** Animation caption */
  caption: RichTextUnion
  /** True, if the animation should be played automatically */
  needAutoplay: boolean
}

/** An audio file */
export interface PageBlockAudio {
  _: 'pageBlockAudio'
  /** Audio file; may be null */
  audio?: Audio
  /** Audio file caption */
  caption: RichTextUnion
}

/** A photo */
export interface PageBlockPhoto {
  _: 'pageBlockPhoto'
  /** Photo file; may be null */
  photo?: Photo
  /** Photo caption */
  caption: RichTextUnion
}

/** A video */
export interface PageBlockVideo {
  _: 'pageBlockVideo'
  /** Video file; may be null */
  video?: Video
  /** Video caption */
  caption: RichTextUnion
  /** True, if the video should be played automatically */
  needAutoplay: boolean
  /** True, if the video should be looped */
  isLooped: boolean
}

/** A page cover */
export interface PageBlockCover {
  _: 'pageBlockCover'
  /** Cover */
  cover: PageBlockUnion
}

/** An embedded web page */
export interface PageBlockEmbedded {
  _: 'pageBlockEmbedded'
  /** Web page URL, if available */
  url: string
  /** HTML-markup of the embedded page */
  html: string
  /** Poster photo, if available; may be null */
  posterPhoto?: Photo
  /** Block width */
  width: number
  /** Block height */
  height: number
  /** Block caption */
  caption: RichTextUnion
  /** True, if the block should be full width */
  isFullWidth: boolean
  /** True, if scrolling should be allowed */
  allowScrolling: boolean
}

/** An embedded post */
export interface PageBlockEmbeddedPost {
  _: 'pageBlockEmbeddedPost'
  /** Web page URL */
  url: string
  /** Post author */
  author: string
  /** Post author photo */
  authorPhoto: Photo
  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  date: number
  /** Post content */
  pageBlocks: PageBlockUnion[]
  /** Post caption */
  caption: RichTextUnion
}

/** A collage */
export interface PageBlockCollage {
  _: 'pageBlockCollage'
  /** Collage item contents */
  pageBlocks: PageBlockUnion[]
  /** Block caption */
  caption: RichTextUnion
}

/** A slideshow */
export interface PageBlockSlideshow {
  _: 'pageBlockSlideshow'
  /** Slideshow item contents */
  pageBlocks: PageBlockUnion[]
  /** Block caption */
  caption: RichTextUnion
}

/** A link to a chat */
export interface PageBlockChatLink {
  _: 'pageBlockChatLink'
  /** Chat title */
  title: string
  /** Chat photo; may be null */
  photo?: ChatPhoto
  /** Chat username, by which all other information about the chat should be resolved */
  username: string
}
