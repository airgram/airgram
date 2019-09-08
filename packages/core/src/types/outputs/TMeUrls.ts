import { TMeUrl } from './index'

export type TMeUrlsUnion = TMeUrls

/** Contains a list of t.me URLs */
export interface TMeUrls {
  _: 'tMeUrls'
  /** List of URLs */
  urls: TMeUrl[]
}
