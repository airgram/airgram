export type LocationUnion = Location

/** Describes a location on planet Earth */
export interface Location {
  _: 'location'
  /** Latitude of the location in degrees; as defined by the sender */
  latitude: number
  /** Longitude of the location, in degrees; as defined by the sender */
  longitude: number
  /**
   * The estimated horizontal accuracy of the location, in meters; as defined by the sender.
   * 0 if unknown
   */
  horizontalAccuracy: number
}
