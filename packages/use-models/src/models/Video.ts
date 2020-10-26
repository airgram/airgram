import { File, Minithumbnail, Thumbnail } from '@airgram/core'

/** Describes a video file */
export class VideoBaseModel {
  public _: 'video'

  /** Duration of the video, in seconds; as defined by the sender */
  public duration: number

  /** Video width; as defined by the sender */
  public width: number

  /** Video height; as defined by the sender */
  public height: number

  /** Original name of the file; as defined by the sender */
  public fileName: string

  /** MIME type of the file; as defined by the sender */
  public mimeType: string

  /**
   * True, if stickers were added to the video. The list of corresponding sticker sets
   * can be received using getAttachedStickerSets
   */
  public hasStickers: boolean

  /** True, if the video should be tried to be streamed */
  public supportsStreaming: boolean

  /** Video minithumbnail; may be null */
  public minithumbnail?: Minithumbnail

  /** Video thumbnail in JPEG or MPEG4 format; as defined by the sender; may be null */
  public thumbnail?: Thumbnail

  /** File containing the video */
  public video: File
}
