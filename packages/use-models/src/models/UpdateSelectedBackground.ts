import { Background } from '@airgram/core'

/** The selected background has changed */
export class UpdateSelectedBackgroundBaseModel {
  public _: 'updateSelectedBackground'

  /** True, if background for dark theme has changed */
  public forDarkTheme: boolean

  /** The new selected background; may be null */
  public background?: Background
}
