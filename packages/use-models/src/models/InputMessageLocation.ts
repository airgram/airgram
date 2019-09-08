import { Location } from '@airgram/core'

/** A message with a location */
export class InputMessageLocationBaseModel {
  public _: 'inputMessageLocation'

  /** Location to be sent */
  public location: Location

  /**
   * Period for which the location can be updated, in seconds; should bebetween 60 and
   * 86400 for a live location and 0 otherwise
   */
  public livePeriod: number
}
