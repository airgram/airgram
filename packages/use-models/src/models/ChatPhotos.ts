import { ChatPhoto } from '@airgram/core'

/** Contains a list of chat or user profile photos */
export class ChatPhotosBaseModel {
  public _: 'chatPhotos'

  /** Total number of photos */
  public totalCount: number

  /** List of photos */
  public photos: ChatPhoto[]
}
