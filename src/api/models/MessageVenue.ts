import { Venue } from '../outputs'

/** A message with information about a venue */
export class MessageVenueBaseModel {
  public _: 'messageVenue'
  /** Message content */
  public venue: Venue
}
