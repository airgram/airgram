export type AutoDownloadSettingsInputUnion = AutoDownloadSettingsInput

/** Contains auto-download settings */
export interface AutoDownloadSettingsInput {
  _: 'autoDownloadSettings'
  /** True, if the auto-download is enabled */
  isAutoDownloadEnabled?: boolean
  /** The maximum size of a photo file to be auto-downloaded, in bytes */
  maxPhotoFileSize?: number
  /** The maximum size of a video file to be auto-downloaded, in bytes */
  maxVideoFileSize?: number
  /** The maximum size of other file types to be auto-downloaded, in bytes */
  maxOtherFileSize?: number
  /** The maximum suggested bitrate for uploaded videos, in kbit/s */
  videoUploadBitrate?: number
  /** True, if the beginning of video files needs to be preloaded for instant playback */
  preloadLargeVideos?: boolean
  /**
   * True, if the next audio track needs to be preloaded while the user is listening to
   * an audio file
   */
  preloadNextAudio?: boolean
  /** True, if "use less data for calls" option needs to be enabled */
  useLessDataForCalls?: boolean
}
