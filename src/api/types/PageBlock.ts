import { ChatUnion } from './Chat'
import { PageBlockUnion } from './PageBlock'
import { RichTextUnion } from './RichText'

export interface PageBlockAnchor {
  _: 'pageBlockAnchor'
  name: string
}

export interface PageBlockAudio {
  _: 'pageBlockAudio'
  audio_id: number
  caption: RichTextUnion
}

export interface PageBlockAuthorDate {
  _: 'pageBlockAuthorDate'
  author: RichTextUnion
  published_date: number
}

export interface PageBlockBlockquote {
  _: 'pageBlockBlockquote'
  text: RichTextUnion
  caption: RichTextUnion
}

export interface PageBlockChannel {
  _: 'pageBlockChannel'
  channel: ChatUnion
}

export interface PageBlockCollage {
  _: 'pageBlockCollage'
  items: PageBlockUnion[]
  caption: RichTextUnion
}

export interface PageBlockCover {
  _: 'pageBlockCover'
  cover: PageBlockUnion
}

export interface PageBlockDivider {
  _: 'pageBlockDivider'
}

export interface PageBlockEmbed {
  _: 'pageBlockEmbed'
  flags: number
  full_width?: true
  allow_scrolling?: true
  url?: string
  html?: string
  poster_photo_id?: number
  w: number
  h: number
  caption: RichTextUnion
}

export interface PageBlockEmbedPost {
  _: 'pageBlockEmbedPost'
  url: string
  webpage_id: number
  author_photo_id: number
  author: string
  date: number
  blocks: PageBlockUnion[]
  caption: RichTextUnion
}

export interface PageBlockFooter {
  _: 'pageBlockFooter'
  text: RichTextUnion
}

export interface PageBlockHeader {
  _: 'pageBlockHeader'
  text: RichTextUnion
}

export interface PageBlockList {
  _: 'pageBlockList'
  ordered: boolean
  items: RichTextUnion[]
}

export interface PageBlockParagraph {
  _: 'pageBlockParagraph'
  text: RichTextUnion
}

export interface PageBlockPhoto {
  _: 'pageBlockPhoto'
  photo_id: number
  caption: RichTextUnion
}

export interface PageBlockPreformatted {
  _: 'pageBlockPreformatted'
  text: RichTextUnion
  language: string
}

export interface PageBlockPullquote {
  _: 'pageBlockPullquote'
  text: RichTextUnion
  caption: RichTextUnion
}

export interface PageBlockSlideshow {
  _: 'pageBlockSlideshow'
  items: PageBlockUnion[]
  caption: RichTextUnion
}

export interface PageBlockSubheader {
  _: 'pageBlockSubheader'
  text: RichTextUnion
}

export interface PageBlockSubtitle {
  _: 'pageBlockSubtitle'
  text: RichTextUnion
}

export interface PageBlockTitle {
  _: 'pageBlockTitle'
  text: RichTextUnion
}

export interface PageBlockUnsupported {
  _: 'pageBlockUnsupported'
}

export interface PageBlockVideo {
  _: 'pageBlockVideo'
  flags: number
  autoplay?: true
  loop?: true
  video_id: number
  caption: RichTextUnion
}

export type PageBlockUnion = PageBlockAnchor
  | PageBlockAudio
  | PageBlockAuthorDate
  | PageBlockBlockquote
  | PageBlockChannel
  | PageBlockCollage
  | PageBlockCover
  | PageBlockDivider
  | PageBlockEmbed
  | PageBlockEmbedPost
  | PageBlockFooter
  | PageBlockHeader
  | PageBlockList
  | PageBlockParagraph
  | PageBlockPhoto
  | PageBlockPreformatted
  | PageBlockPullquote
  | PageBlockSlideshow
  | PageBlockSubheader
  | PageBlockSubtitle
  | PageBlockTitle
  | PageBlockUnsupported
  | PageBlockVideo
