import { Video } from '@airgram/core'

/** A video message */
export class PushMessageContentVideoBaseModel {
  public _: 'pushMessageContentVideo'

  /** Message content; may be null */
  public video?: Video

  /** Video caption */
  public caption: string

  /** True, if the video is secret */
  public isSecret: boolean

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
