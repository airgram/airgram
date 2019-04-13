export type CustomRequestResultUnion = CustomRequestResult

/** Contains the result of a custom request */
export interface CustomRequestResult {
  _: 'customRequestResult'
  /** A JSON-serialized result */
  result: string
}
