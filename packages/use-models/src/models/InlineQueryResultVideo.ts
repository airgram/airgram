import { Video } from '@airgram/core'

/** Represents a video */
export class InlineQueryResultVideoBaseModel {
  public _: 'inlineQueryResultVideo'

  /** Unique identifier of the query result */
  public id: string

  /** Video */
  public video: Video

  /** Title of the video */
  public title: string

  /** Description of the video */
  public description: string
}
