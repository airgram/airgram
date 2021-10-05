import { FormattedText, InputFileUnion, InputThumbnail } from '@airgram/core'

/** A photo message */
export class InputMessagePhotoBaseModel {
  public _: 'inputMessagePhoto'

  /** Photo to send */
  public photo: InputFileUnion

  /**
   * Photo thumbnail to be sent; pass null to skip thumbnail uploading. The thumbnail
   * is sent to the other party only in secret chats
   */
  public thumbnail: InputThumbnail

  /** File identifiers of the stickers added to the photo, if applicable */
  public addedStickerFileIds: number[]

  /** Photo width */
  public width: number

  /** Photo height */
  public height: number

  /**
   * Photo caption; pass null to use an empty caption; 0-GetOption("message_caption_length_max")
   * characters
   */
  public caption: FormattedText

  /**
   * Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  public ttl: number
}
