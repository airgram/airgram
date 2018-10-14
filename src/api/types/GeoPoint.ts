
export interface GeoPoint {
  _: 'geoPoint'
  long: number
  lat: number
}

export interface GeoPointEmpty {
  _: 'geoPointEmpty'
}

export type GeoPointUnion = GeoPoint
  | GeoPointEmpty
