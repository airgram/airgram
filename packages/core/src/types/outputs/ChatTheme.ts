import { ThemeSettings } from './index'

export type ChatThemeUnion = ChatTheme

/** Describes a chat theme */
export interface ChatTheme {
  _: 'chatTheme'
  /** Theme name */
  name: string
  /** Theme settings for a light chat theme */
  lightSettings: ThemeSettings
  /** Theme settings for a dark chat theme */
  darkSettings: ThemeSettings
}
