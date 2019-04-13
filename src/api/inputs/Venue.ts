import { LocationInput } from './index'

export type VenueInputUnion = VenueInput

/** Describes a venue */
export interface VenueInput {
  _: 'venue'
  /** Venue location; as defined by the sender */
  location?: LocationInput
  /** Venue name; as defined by the sender */
  title?: string
  /** Venue address; as defined by the sender */
  address?: string
  /**
   * Provider of the venue database; as defined by the sender. Currently only "foursquare"
   * needs to be supported
   */
  provider?: string
  /** Identifier of the venue in the provider database; as defined by the sender */
  id?: string
  /** Type of the venue in the provider database; as defined by the sender */
  type?: string
}
