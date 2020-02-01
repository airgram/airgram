import { BackgroundTypeUnion, Document } from './index'

export type BackgroundUnion = Background

/** Describes a chat background */
export interface Background {
  _: 'background'
  /** Unique background identifier */
  id: string
  /** True, if this is one of default backgrounds */
  isDefault: boolean
  /** True, if the background is dark and is recommended to be used with dark theme */
  isDark: boolean
  /** Unique background name */
  name: string
  /** Document with the background; may be null. Null only for filled backgrounds */
  document?: Document
  /** Type of the background */
  type: BackgroundTypeUnion
}
