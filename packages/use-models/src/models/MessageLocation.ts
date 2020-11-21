import { Location } from '@airgram/core'

/** A message with a location */
export class MessageLocationBaseModel {
  public _: 'messageLocation'

  /** The location description */
  public location: Location

  /**
   * Time relative to the message send date, for which the location can be updated, in
   * seconds
   */
  public livePeriod: number

  /**
   * Left time for which the location can be updated, in seconds. updateMessageContent
   * is not sent when this field changes
   */
  public expiresIn: number

  /**
   * For live locations, a direction in which the location moves, in degrees; 1-360. If
   * 0 the direction is unknown
   */
  public heading: number

  /**
   * For live locations, a maximum distance to another chat member for proximity alerts,
   * in meters (0-100000). 0 if the notification is disabled. Available only for the message
   * sender
   */
  public proximityAlertRadius: number
}
