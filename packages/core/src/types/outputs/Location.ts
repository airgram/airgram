export type LocationUnion = Location

/** Describes a location on planet Earth */
export interface Location {
  _: 'location'
  /** Latitude of the location in degrees; as defined by the sender */
  latitude: number
  /** Longitude of the location, in degrees; as defined by the sender */
  longitude: number
}
