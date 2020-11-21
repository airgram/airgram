/** Describes a location on planet Earth */
export class LocationBaseModel {
  public _: 'location'

  /** Latitude of the location in degrees; as defined by the sender */
  public latitude: number

  /** Longitude of the location, in degrees; as defined by the sender */
  public longitude: number

  /**
   * The estimated horizontal accuracy of the location, in meters; as defined by the sender.
   * 0 if unknown
   */
  public horizontalAccuracy: number
}
