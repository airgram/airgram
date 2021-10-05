import { FormattedText } from '@airgram/core'

/** Contains information about a tg: deep link */
export class DeepLinkInfoBaseModel {
  public _: 'deepLinkInfo'

  /** Text to be shown to the user */
  public text: FormattedText

  /** True, if the user must be asked to update the application */
  public needUpdateApplication: boolean
}
