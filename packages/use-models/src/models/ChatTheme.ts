import { ThemeSettings } from '@airgram/core'

/** Describes a chat theme */
export class ChatThemeBaseModel {
  public _: 'chatTheme'

  /** Theme name */
  public name: string

  /** Theme settings for a light chat theme */
  public lightSettings: ThemeSettings

  /** Theme settings for a dark chat theme */
  public darkSettings: ThemeSettings
}
