import { File } from './index'

export type ChatPhotoUnion = ChatPhoto

/** Describes the photo of a chat */
export interface ChatPhoto {
  _: 'chatPhoto'
  /** A small (160x160) chat photo */
  small: File
  /** A big (640x640) chat photo */
  big: File
}
