import { TMeUrl } from '@airgram/core'

/** Contains a list of t.me URLs */
export class TMeUrlsBaseModel {
  public _: 'tMeUrls'

  /** List of URLs */
  public urls: TMeUrl[]
}
