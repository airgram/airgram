import { BackgroundTypeUnion, Document } from '@airgram/core'

/** Describes a chat background */
export class BackgroundBaseModel {
  public _: 'background'

  /** Unique background identifier */
  public id: string

  /** True, if this is one of default backgrounds */
  public isDefault: boolean

  /** True, if the background is dark and is recommended to be used with dark theme */
  public isDark: boolean

  /** Unique background name */
  public name: string

  /** Document with the background; may be null. Null only for filled backgrounds */
  public document?: Document

  /** Type of the background */
  public type: BackgroundTypeUnion
}
