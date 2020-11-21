/** Describes a statistical graph */
export type StatisticalGraphUnion = StatisticalGraphData
  | StatisticalGraphAsync
  | StatisticalGraphError

/** A graph data */
export interface StatisticalGraphData {
  _: 'statisticalGraphData'
  /** Graph data in JSON format */
  jsonData: string
  /** If non-empty, a token which can be used to receive a zoomed in graph */
  zoomToken: string
}

/** The graph data to be asynchronously loaded through getStatisticalGraph */
export interface StatisticalGraphAsync {
  _: 'statisticalGraphAsync'
  /** The token to use for data loading */
  token: string
}

/** An error message to be shown to the user instead of the graph */
export interface StatisticalGraphError {
  _: 'statisticalGraphError'
  /** The error message */
  errorMessage: string
}
