import { Location } from '@airgram/core'

/** A message with a location */
export class InputMessageLocationBaseModel {
  public _: 'inputMessageLocation'

  /** Location to be sent */
  public location: Location

  /**
   * Period for which the location can be updated, in seconds; should be between 60 and
   * 86400 for a live location and 0 otherwise
   */
  public livePeriod: number

  /**
   * For live locations, a direction in which the location moves, in degrees; 1-360. Pass
   * 0 if unknown
   */
  public heading: number

  /**
   * For live locations, a maximum distance to another chat member for proximity alerts,
   * in meters (0-100000). Pass 0 if the notification is disabled. Can't be enabled in
   * channels and Saved Messages
   */
  public proximityAlertRadius: number
}
