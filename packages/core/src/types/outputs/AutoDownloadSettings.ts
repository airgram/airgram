export type AutoDownloadSettingsUnion = AutoDownloadSettings

/** Contains auto-download settings */
export interface AutoDownloadSettings {
  _: 'autoDownloadSettings'
  /** True, if the auto-download is enabled */
  isAutoDownloadEnabled: boolean
  /** Maximum size of a photo file to be auto-downloaded */
  maxPhotoFileSize: number
  /** Maximum size of a video file to be auto-downloaded */
  maxVideoFileSize: number
  /** Maximum size of other file types to be auto-downloaded */
  maxOtherFileSize: number
  /** True, if the beginning of videos needs to be preloaded for instant playback */
  preloadLargeVideos: boolean
  /**
   * True, if the next audio track needs to be preloaded while the user is listening to
   * an audio file
   */
  preloadNextAudio: boolean
  /** True, if "use less data for calls" option needs to be enabled */
  useLessDataForCalls: boolean
}
