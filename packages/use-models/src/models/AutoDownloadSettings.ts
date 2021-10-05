/** Contains auto-download settings */
export class AutoDownloadSettingsBaseModel {
  public _: 'autoDownloadSettings'

  /** True, if the auto-download is enabled */
  public isAutoDownloadEnabled: boolean

  /** The maximum size of a photo file to be auto-downloaded, in bytes */
  public maxPhotoFileSize: number

  /** The maximum size of a video file to be auto-downloaded, in bytes */
  public maxVideoFileSize: number

  /** The maximum size of other file types to be auto-downloaded, in bytes */
  public maxOtherFileSize: number

  /** The maximum suggested bitrate for uploaded videos, in kbit/s */
  public videoUploadBitrate: number

  /** True, if the beginning of video files needs to be preloaded for instant playback */
  public preloadLargeVideos: boolean

  /**
   * True, if the next audio track needs to be preloaded while the user is listening to
   * an audio file
   */
  public preloadNextAudio: boolean

  /** True, if "use less data for calls" option needs to be enabled */
  public useLessDataForCalls: boolean
}
