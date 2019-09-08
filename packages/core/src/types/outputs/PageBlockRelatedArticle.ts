import { Photo } from './index'

export type PageBlockRelatedArticleUnion = PageBlockRelatedArticle

/** Contains information about a related article */
export interface PageBlockRelatedArticle {
  _: 'pageBlockRelatedArticle'
  /** Related article URL */
  url: string
  /** Article title; may be empty */
  title: string
  /** Article description; may be empty */
  description: string
  /** Article photo; may be null */
  photo?: Photo
  /** Article author; may be empty */
  author: string
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  publishDate: number
}
