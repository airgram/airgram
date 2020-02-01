import {
  Animation,
  Audio,
  ChatPhoto,
  Location,
  PageBlockCaption,
  PageBlockListItem,
  PageBlockRelatedArticle,
  PageBlockTableCell,
  Photo,
  RichTextUnion,
  Video,
  VoiceNote
} from './index'

/** Describes a block of an instant view web page */
export type PageBlockUnion = PageBlockTitle
  | PageBlockSubtitle
  | PageBlockAuthorDate
  | PageBlockHeader
  | PageBlockSubheader
  | PageBlockKicker
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
  | PageBlockVoiceNote
  | PageBlockCover
  | PageBlockEmbedded
  | PageBlockEmbeddedPost
  | PageBlockCollage
  | PageBlockSlideshow
  | PageBlockChatLink
  | PageBlockTable
  | PageBlockDetails
  | PageBlockRelatedArticles
  | PageBlockMap

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

/** A kicker */
export interface PageBlockKicker {
  _: 'pageBlockKicker'
  /** Kicker */
  kicker: RichTextUnion
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

/** A list of data blocks */
export interface PageBlockList {
  _: 'pageBlockList'
  /** The items of the list */
  items: PageBlockListItem[]
}

/** A block quote */
export interface PageBlockBlockQuote {
  _: 'pageBlockBlockQuote'
  /** Quote text */
  text: RichTextUnion
  /** Quote credit */
  credit: RichTextUnion
}

/** A pull quote */
export interface PageBlockPullQuote {
  _: 'pageBlockPullQuote'
  /** Quote text */
  text: RichTextUnion
  /** Quote credit */
  credit: RichTextUnion
}

/** An animation */
export interface PageBlockAnimation {
  _: 'pageBlockAnimation'
  /** Animation file; may be null */
  animation?: Animation
  /** Animation caption */
  caption: PageBlockCaption
  /** True, if the animation should be played automatically */
  needAutoplay: boolean
}

/** An audio file */
export interface PageBlockAudio {
  _: 'pageBlockAudio'
  /** Audio file; may be null */
  audio?: Audio
  /** Audio file caption */
  caption: PageBlockCaption
}

/** A photo */
export interface PageBlockPhoto {
  _: 'pageBlockPhoto'
  /** Photo file; may be null */
  photo?: Photo
  /** Photo caption */
  caption: PageBlockCaption
  /** URL that needs to be opened when the photo is clicked */
  url: string
}

/** A video */
export interface PageBlockVideo {
  _: 'pageBlockVideo'
  /** Video file; may be null */
  video?: Video
  /** Video caption */
  caption: PageBlockCaption
  /** True, if the video should be played automatically */
  needAutoplay: boolean
  /** True, if the video should be looped */
  isLooped: boolean
}

/** A voice note */
export interface PageBlockVoiceNote {
  _: 'pageBlockVoiceNote'
  /** Voice note; may be null */
  voiceNote?: VoiceNote
  /** Voice note caption */
  caption: PageBlockCaption
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
  /** Block width; 0 if unknown */
  width: number
  /** Block height; 0 if unknown */
  height: number
  /** Block caption */
  caption: PageBlockCaption
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
  /** Post author photo; may be null */
  authorPhoto?: Photo
  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  date: number
  /** Post content */
  pageBlocks: PageBlockUnion[]
  /** Post caption */
  caption: PageBlockCaption
}

/** A collage */
export interface PageBlockCollage {
  _: 'pageBlockCollage'
  /** Collage item contents */
  pageBlocks: PageBlockUnion[]
  /** Block caption */
  caption: PageBlockCaption
}

/** A slideshow */
export interface PageBlockSlideshow {
  _: 'pageBlockSlideshow'
  /** Slideshow item contents */
  pageBlocks: PageBlockUnion[]
  /** Block caption */
  caption: PageBlockCaption
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

/** A table */
export interface PageBlockTable {
  _: 'pageBlockTable'
  /** Table caption */
  caption: RichTextUnion
  /** Table cells */
  cells: PageBlockTableCell[][]
  /** True, if the table is bordered */
  isBordered: boolean
  /** True, if the table is striped */
  isStriped: boolean
}

/** A collapsible block */
export interface PageBlockDetails {
  _: 'pageBlockDetails'
  /** Always visible heading for the block */
  header: RichTextUnion
  /** Block contents */
  pageBlocks: PageBlockUnion[]
  /** True, if the block is open by default */
  isOpen: boolean
}

/** Related articles */
export interface PageBlockRelatedArticles {
  _: 'pageBlockRelatedArticles'
  /** Block header */
  header: RichTextUnion
  /** List of related articles */
  articles: PageBlockRelatedArticle[]
}

/** A map */
export interface PageBlockMap {
  _: 'pageBlockMap'
  /** Location of the map center */
  location: Location
  /** Map zoom level */
  zoom: number
  /** Map width */
  width: number
  /** Map height */
  height: number
  /** Block caption */
  caption: PageBlockCaption
}
