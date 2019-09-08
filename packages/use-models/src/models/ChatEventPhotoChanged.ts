import { Photo } from '@airgram/core'

/** The chat photo was changed */
export class ChatEventPhotoChangedBaseModel {
  public _: 'chatEventPhotoChanged'

  /** Previous chat photo value; may be null */
  public oldPhoto?: Photo

  /** New chat photo value; may be null */
  public newPhoto?: Photo
}
