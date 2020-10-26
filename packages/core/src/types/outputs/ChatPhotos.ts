import { ChatPhoto } from './index'

export type ChatPhotosUnion = ChatPhotos

/** Contains a list of chat or user profile photos */
export interface ChatPhotos {
  _: 'chatPhotos'
  /** Total number of photos */
  totalCount: number
  /** List of photos */
  photos: ChatPhoto[]
}
