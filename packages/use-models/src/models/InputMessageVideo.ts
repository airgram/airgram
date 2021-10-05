import { FormattedText, InputFileUnion, InputThumbnail } from '@airgram/core'

/** A video message */
export class InputMessageVideoBaseModel {
  public _: 'inputMessageVideo'

  /** Video to be sent */
  public video: InputFileUnion

  /** Video thumbnail; pass null to skip thumbnail uploading */
  public thumbnail: InputThumbnail

  /** File identifiers of the stickers added to the video, if applicable */
  public addedStickerFileIds: number[]

  /** Duration of the video, in seconds */
  public duration: number

  /** Video width */
  public width: number

  /** Video height */
  public height: number

  /** True, if the video is supposed to be streamed */
  public supportsStreaming: boolean

  /**
   * Video caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  public caption: FormattedText

  /**
   * Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  public ttl: number
}
