/** Represents a local file */
export class LocalFileBaseModel {
  public _: 'localFile'

  /** Local path to the locally available file part; may be empty */
  public path: string

  /** True, if it is possible to try to download or generate the file */
  public canBeDownloaded: boolean

  /** True, if the file can be deleted */
  public canBeDeleted: boolean

  /**
   * True, if the file is currently being downloaded (or a local copy is being generated
   * by some other means)
   */
  public isDownloadingActive: boolean

  /** True, if the local copy is fully available */
  public isDownloadingCompleted: boolean

  /**
   * Download will be started from this offset. downloaded_prefix_size is calculated from
   * this offset
   */
  public downloadOffset: number

  /**
   * If is_downloading_completed is false, then only some prefix of the file starting
   * from download_offset is ready to be read. downloaded_prefix_size is the size of that
   * prefix
   */
  public downloadedPrefixSize: number

  /**
   * Total downloaded file bytes. Should be used only for calculating download progress.
   * The actual file size may be bigger, and some parts of it may contain garbage
   */
  public downloadedSize: number
}
