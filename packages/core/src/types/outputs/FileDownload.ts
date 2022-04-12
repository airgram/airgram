import { Message } from './index'

export type FileDownloadUnion = FileDownload

/** Describes a file added to file download list */
export interface FileDownload {
  _: 'fileDownload'
  /** File identifier */
  fileId: number
  /** The message with the file */
  message: Message
  /** Point in time (Unix timestamp) when the file was added to the download list */
  addDate: number
  /**
   * Point in time (Unix timestamp) when the file downloading was completed; 0 if the
   * file downloading isn't completed
   */
  completeDate: number
  /** True, if downloading of the file is paused */
  isPaused: boolean
}
