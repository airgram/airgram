import { Thumbnail } from '@airgram/core'

/** Represents a link to an article or web page */
export class InlineQueryResultArticleBaseModel {
  public _: 'inlineQueryResultArticle'

  /** Unique identifier of the query result */
  public id: string

  /** URL of the result, if it exists */
  public url: string

  /** True, if the URL must be not shown */
  public hideUrl: boolean

  /** Title of the result */
  public title: string

  /** A short description of the result */
  public description: string

  /** Result thumbnail in JPEG format; may be null */
  public thumbnail?: Thumbnail
}
