import { File } from '@airgram/core'

/** Describes the photo of a chat */
export class ChatPhotoBaseModel {
  public _: 'chatPhoto'

  /**
   * A small (160x160) chat photo. The file can be downloaded only before the photo is
   * changed
   */
  public small: File

  /** A big (640x640) chat photo. The file can be downloaded only before the photo is changed */
  public big: File
}
