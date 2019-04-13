import { File } from '../outputs'

/** Describes the photo of a chat */
export class ChatPhotoBaseModel {
  public _: 'chatPhoto'
  /** A small (160x160) chat photo */
  public small: File
  /** A big (640x640) chat photo */
  public big: File
}
