import { Photo } from '@airgram/core'

/** A photo message */
export class PushMessageContentPhotoBaseModel {
  public _: 'pushMessageContentPhoto'

  /** Message content; may be null */
  public photo?: Photo

  /** Photo caption */
  public caption: string

  /** True, if the photo is secret */
  public isSecret: boolean

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
