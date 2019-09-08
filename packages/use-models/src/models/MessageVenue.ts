import { Venue } from '@airgram/core'

/** A message with information about a venue */
export class MessageVenueBaseModel {
  public _: 'messageVenue'

  /** Message content */
  public venue: Venue
}
