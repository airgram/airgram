import { Message } from '@airgram/core'

/** Describes a file added to file download list */
export class FileDownloadBaseModel {
  public _: 'fileDownload'

  /** File identifier */
  public fileId: number

  /** The message with the file */
  public message: Message

  /** Point in time (Unix timestamp) when the file was added to the download list */
  public addDate: number

  /**
   * Point in time (Unix timestamp) when the file downloading was completed; 0 if the
   * file downloading isn't completed
   */
  public completeDate: number

  /** True, if downloading of the file is paused */
  public isPaused: boolean
}
