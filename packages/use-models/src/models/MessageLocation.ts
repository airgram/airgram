import { Location } from '@airgram/core'

/** A message with a location */
export class MessageLocationBaseModel {
  public _: 'messageLocation'

  /** Message content */
  public location: Location

  /**
   * Time relative to the message sent date until which the location can be updated, in
   * seconds
   */
  public livePeriod: number

  /**
   * Left time for which the location can be updated, in seconds. updateMessageContent
   * is not sent when this field changes
   */
  public expiresIn: number
}
