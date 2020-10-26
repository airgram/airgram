import { File, Minithumbnail, Thumbnail } from '@airgram/core'

/**
 * Describes a video note. The video must be equal in width and height, cropped to a
 * circle, and stored in MPEG4 format
 */
export class VideoNoteBaseModel {
  public _: 'videoNote'

  /** Duration of the video, in seconds; as defined by the sender */
  public duration: number

  /** Video width and height; as defined by the sender */
  public length: number

  /** Video minithumbnail; may be null */
  public minithumbnail?: Minithumbnail

  /** Video thumbnail in JPEG format; as defined by the sender; may be null */
  public thumbnail?: Thumbnail

  /** File containing the video */
  public video: File
}
