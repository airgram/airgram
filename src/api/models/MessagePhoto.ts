import { FormattedText, Photo } from '../outputs'

/** A photo message */
export class MessagePhotoBaseModel {
  public _: 'messagePhoto'
  /** Message content */
  public photo: Photo
  /** Photo caption */
  public caption: FormattedText
  /** True, if the photo must be blurred and must be shown only while tapped */
  public isSecret: boolean
}
