import { ChatTheme } from '@airgram/core'

/** The list of available chat themes has changed */
export class UpdateChatThemesBaseModel {
  public _: 'updateChatThemes'

  /** The new list of chat themes */
  public chatThemes: ChatTheme[]
}
