/** Describes a location on planet Earth */
export class LocationBaseModel {
  public _: 'location'
  /** Latitude of the location in degrees; as defined by the sender */
  public latitude: number
  /** Longitude of the location, in degrees; as defined by the sender */
  public longitude: number
}
