import { InputFileUnion, InputThumbnail } from '@airgram/core'

/** A video note message */
export class InputMessageVideoNoteBaseModel {
  public _: 'inputMessageVideoNote'

  /** Video note to be sent */
  public videoNote: InputFileUnion

  /** Video thumbnail; pass null to skip thumbnail uploading */
  public thumbnail: InputThumbnail

  /** Duration of the video, in seconds */
  public duration: number

  /** Video width and height; must be positive and not greater than 640 */
  public length: number
}
