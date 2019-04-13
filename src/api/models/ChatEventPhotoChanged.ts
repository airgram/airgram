import { ChatPhoto } from '../outputs'

/** The chat photo was changed */
export class ChatEventPhotoChangedBaseModel {
  public _: 'chatEventPhotoChanged'
  /** Previous chat photo value; may be null */
  public oldPhoto?: ChatPhoto
  /** New chat photo value; may be null */
  public newPhoto?: ChatPhoto
}
