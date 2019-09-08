export type LocationInputUnion = LocationInput

/** Describes a location on planet Earth */
export interface LocationInput {
  _: 'location'
  /** Latitude of the location in degrees; as defined by the sender */
  latitude?: number
  /** Longitude of the location, in degrees; as defined by the sender */
  longitude?: number
}
