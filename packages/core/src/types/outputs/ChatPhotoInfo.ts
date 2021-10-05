import { File, Minithumbnail } from './index'

export type ChatPhotoInfoUnion = ChatPhotoInfo

/** Contains basic information about the photo of a chat */
export interface ChatPhotoInfo {
  _: 'chatPhotoInfo'
  /**
   * A small (160x160) chat photo variant in JPEG format. The file can be downloaded only
   * before the photo is changed
   */
  small: File
  /**
   * A big (640x640) chat photo variant in JPEG format. The file can be downloaded only
   * before the photo is changed
   */
  big: File
  /** Chat photo minithumbnail; may be null */
  minithumbnail?: Minithumbnail
  /** True, if the photo has animated variant */
  hasAnimation: boolean
}
