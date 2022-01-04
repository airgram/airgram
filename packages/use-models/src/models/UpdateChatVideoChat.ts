import { VideoChat } from '@airgram/core'

/** A chat video chat state has changed */
export class UpdateChatVideoChatBaseModel {
  public _: 'updateChatVideoChat'

  /** Chat identifier */
  public chatId: number

  /** New value of video_chat */
  public videoChat: VideoChat
}
