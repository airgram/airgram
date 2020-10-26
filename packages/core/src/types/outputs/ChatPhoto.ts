import { AnimatedChatPhoto, Minithumbnail, PhotoSize } from './index'

export type ChatPhotoUnion = ChatPhoto

/** Describes a chat or user profile photo */
export interface ChatPhoto {
  _: 'chatPhoto'
  /** Unique photo identifier */
  id: string
  /** Point in time (Unix timestamp) when the photo has been added */
  addedDate: number
  /** Photo minithumbnail; may be null */
  minithumbnail?: Minithumbnail
  /** Available variants of the photo in JPEG format, in different size */
  sizes: PhotoSize[]
  /** Animated variant of the photo in MPEG4 format; may be null */
  animation?: AnimatedChatPhoto
}
