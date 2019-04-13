import { Photo } from '../outputs'

/** An updated chat photo */
export class MessageChatChangePhotoBaseModel {
  public _: 'messageChatChangePhoto'
  /** New chat photo */
  public photo: Photo
}
