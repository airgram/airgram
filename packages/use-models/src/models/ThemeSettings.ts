import { Background, BackgroundFillUnion } from '@airgram/core'

/** Describes theme settings */
export class ThemeSettingsBaseModel {
  public _: 'themeSettings'

  /** Theme accent color in ARGB format */
  public accentColor: number

  /** The background to be used in chats; may be null */
  public background?: Background

  /** The fill to be used as a background for outgoing messages */
  public outgoingMessageFill: BackgroundFillUnion

  /** If true, the freeform gradient fill needs to be animated on every sent message */
  public animateOutgoingMessageFill: boolean

  /** Accent color of outgoing messages in ARGB format */
  public outgoingMessageAccentColor: number
}
