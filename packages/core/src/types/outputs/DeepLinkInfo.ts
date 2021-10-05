import { FormattedText } from './index'

export type DeepLinkInfoUnion = DeepLinkInfo

/** Contains information about a tg: deep link */
export interface DeepLinkInfo {
  _: 'deepLinkInfo'
  /** Text to be shown to the user */
  text: FormattedText
  /** True, if the user must be asked to update the application */
  needUpdateApplication: boolean
}
