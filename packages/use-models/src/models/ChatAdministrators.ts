import { ChatAdministrator } from '@airgram/core'

/** Represents a list of chat administrators */
export class ChatAdministratorsBaseModel {
  public _: 'chatAdministrators'

  /** A list of chat administrators */
  public administrators: ChatAdministrator[]
}
