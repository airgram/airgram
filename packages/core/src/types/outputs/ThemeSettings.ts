import { Background, BackgroundFillUnion } from './index'

export type ThemeSettingsUnion = ThemeSettings

/** Describes theme settings */
export interface ThemeSettings {
  _: 'themeSettings'
  /** Theme accent color in ARGB format */
  accentColor: number
  /** The background to be used in chats; may be null */
  background?: Background
  /** The fill to be used as a background for outgoing messages */
  outgoingMessageFill: BackgroundFillUnion
  /** If true, the freeform gradient fill needs to be animated on every sent message */
  animateOutgoingMessageFill: boolean
  /** Accent color of outgoing messages in ARGB format */
  outgoingMessageAccentColor: number
}
