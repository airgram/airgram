import { ChatPhoto } from '@airgram/core'

/** An updated chat photo */
export class MessageChatChangePhotoBaseModel {
  public _: 'messageChatChangePhoto'

  /** New chat photo */
  public photo: ChatPhoto
}
