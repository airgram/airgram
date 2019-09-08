import { File, Minithumbnail, PhotoSize } from '@airgram/core'

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

  /** Animation minithumbnail; may be null */
  public minithumbnail?: Minithumbnail

  /** Animation thumbnail; may be null */
  public thumbnail?: PhotoSize

  /** File containing the animation */
  public animation: File
}
