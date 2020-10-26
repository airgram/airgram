import { AnimatedChatPhoto, Minithumbnail, PhotoSize } from '@airgram/core'

/** Describes a chat or user profile photo */
export class ChatPhotoBaseModel {
  public _: 'chatPhoto'

  /** Unique photo identifier */
  public id: string

  /** Point in time (Unix timestamp) when the photo has been added */
  public addedDate: number

  /** Photo minithumbnail; may be null */
  public minithumbnail?: Minithumbnail

  /** Available variants of the photo in JPEG format, in different size */
  public sizes: PhotoSize[]

  /** Animated variant of the photo in MPEG4 format; may be null */
  public animation?: AnimatedChatPhoto
}
