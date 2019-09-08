import { CHAT_TYPE } from '@airgram/constants'
import { ChatBaseModel } from '@airgram/use-models'

export class ChatModel extends ChatBaseModel {
  public get isBasicGroup (): boolean {
    return this.type._ === CHAT_TYPE.chatTypeBasicGroup
  }

  public get isSupergroup (): boolean {
    return this.type._ === CHAT_TYPE.chatTypeSupergroup
  }

  public get isPrivateChat (): boolean {
    return this.type._ === CHAT_TYPE.chatTypePrivate
  }

  public get isSecretChat (): boolean {
    return this.type._ === CHAT_TYPE.chatTypeSecret
  }
}

// In real projects the module path should be `@airgram/core/types/outputs/{ObjectType}`
// declare module '@airgram/core/types/outputs/Chat' {
declare module '@airgram/core/src/types/outputs/Chat' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Chat extends ChatModel {}
}
