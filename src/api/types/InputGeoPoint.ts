
export interface InputGeoPoint {
  _: 'inputGeoPoint'
  lat: number
  long: number
}

export interface InputGeoPointEmpty {
  _: 'inputGeoPointEmpty'
}

export type InputGeoPointUnion = InputGeoPoint
  | InputGeoPointEmpty
