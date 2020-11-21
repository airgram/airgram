/** A media album */
export class PushMessageContentMediaAlbumBaseModel {
  public _: 'pushMessageContentMediaAlbum'

  /** Number of messages in the album */
  public totalCount: number

  /** True, if the album has at least one photo */
  public hasPhotos: boolean

  /** True, if the album has at least one video */
  public hasVideos: boolean

  /** True, if the album has at least one audio file */
  public hasAudios: boolean

  /** True, if the album has at least one document */
  public hasDocuments: boolean
}
