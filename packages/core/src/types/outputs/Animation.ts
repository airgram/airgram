import { File, Minithumbnail, Thumbnail } from './index'

export type AnimationUnion = Animation

/** Describes an animation file. The animation must be encoded in GIF or MPEG4 format */
export interface Animation {
  _: 'animation'
  /** Duration of the animation, in seconds; as defined by the sender */
  duration: number
  /** Width of the animation */
  width: number
  /** Height of the animation */
  height: number
  /** Original name of the file; as defined by the sender */
  fileName: string
  /** MIME type of the file, usually "image/gif" or "video/mp4" */
  mimeType: string
  /**
   * True, if stickers were added to the animation. The list of corresponding sticker
   * set can be received using getAttachedStickerSets
   */
  hasStickers: boolean
  /** Animation minithumbnail; may be null */
  minithumbnail?: Minithumbnail
  /** Animation thumbnail in JPEG or MPEG4 format; may be null */
  thumbnail?: Thumbnail
  /** File containing the animation */
  animation: File
}
