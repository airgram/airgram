/** Contains auto-download settings */
export class AutoDownloadSettingsBaseModel {
  public _: 'autoDownloadSettings'

  /** True, if the auto-download is enabled */
  public isAutoDownloadEnabled: boolean

  /** Maximum size of a photo file to be auto-downloaded */
  public maxPhotoFileSize: number

  /** Maximum size of a video file to be auto-downloaded */
  public maxVideoFileSize: number

  /** Maximum size of other file types to be auto-downloaded */
  public maxOtherFileSize: number

  /** True, if the beginning of videos needs to be preloaded for instant playback */
  public preloadLargeVideos: boolean

  /**
   * True, if the next audio track needs to be preloaded while the user is listening to
   * an audio file
   */
  public preloadNextAudio: boolean

  /** True, if "use less data for calls" option needs to be enabled */
  public useLessDataForCalls: boolean
}
