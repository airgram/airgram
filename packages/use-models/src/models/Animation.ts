import { File, Minithumbnail, Thumbnail } from '@airgram/core'

/** Describes an animation file. The animation must be encoded in GIF or MPEG4 format */
export class AnimationBaseModel {
  public _: 'animation'

  /** Duration of the animation, in seconds; as defined by the sender */
  public duration: number

  /** Width of the animation */
  public width: number

  /** Height of the animation */
  public height: number

  /** Original name of the file; as defined by the sender */
  public fileName: string

  /** MIME type of the file, usually "image/gif" or "video/mp4" */
  public mimeType: string

  /**
   * True, if stickers were added to the animation. The list of corresponding sticker
   * set can be received using getAttachedStickerSets
   */
  public hasStickers: boolean

  /** Animation minithumbnail; may be null */
  public minithumbnail?: Minithumbnail

  /** Animation thumbnail in JPEG or MPEG4 format; may be null */
  public thumbnail?: Thumbnail

  /** File containing the animation */
  public animation: File
}
