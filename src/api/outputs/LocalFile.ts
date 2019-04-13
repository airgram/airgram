export type LocalFileUnion = LocalFile

/** Represents a local file */
export interface LocalFile {
  _: 'localFile'
  /** Local path to the locally available file part; may be empty */
  path: string
  /** True, if it is possible to try to download or generate the file */
  canBeDownloaded: boolean
  /** True, if the file can be deleted */
  canBeDeleted: boolean
  /**
   * True, if the file is currently being downloaded (or a local copy is being generated
   * by some other means)
   */
  isDownloadingActive: boolean
  /** True, if the local copy is fully available */
  isDownloadingCompleted: boolean
  /**
   * If is_downloading_completed is false, then only some prefix of the file is ready
   * to be read. downloaded_prefix_size is the size of that prefix
   */
  downloadedPrefixSize: number
  /**
   * Total downloaded file bytes. Should be used only for calculating download progress.
   * The actual file size may be bigger, and some parts of it may contain garbage
   */
  downloadedSize: number
}
