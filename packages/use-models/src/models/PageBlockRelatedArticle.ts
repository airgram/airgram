import { Photo } from '@airgram/core'

/** Contains information about a related article */
export class PageBlockRelatedArticleBaseModel {
  public _: 'pageBlockRelatedArticle'

  /** Related article URL */
  public url: string

  /** Article title; may be empty */
  public title: string

  /** Article description; may be empty */
  public description: string

  /** Article photo; may be null */
  public photo?: Photo

  /** Article author; may be empty */
  public author: string

  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  public publishDate: number
}
