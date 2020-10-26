import { File } from '@airgram/core'

/** Contains basic information about the photo of a chat */
export class ChatPhotoInfoBaseModel {
  public _: 'chatPhotoInfo'

  /**
   * A small (160x160) chat photo variant in JPEG format. The file can be downloaded only
   * before the photo is changed
   */
  public small: File

  /**
   * A big (640x640) chat photo variant in JPEG format. The file can be downloaded only
   * before the photo is changed
   */
  public big: File

  /** True, if the photo has animated variant */
  public hasAnimation: boolean
}
