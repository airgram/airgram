import { VoiceChat } from '@airgram/core'

/** A chat voice chat state has changed */
export class UpdateChatVoiceChatBaseModel {
  public _: 'updateChatVoiceChat'

  /** Chat identifier */
  public chatId: number

  /** New value of voice_chat */
  public voiceChat: VoiceChat
}
