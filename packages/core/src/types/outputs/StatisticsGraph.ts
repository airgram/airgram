/** Describes a statistics graph */
export type StatisticsGraphUnion = StatisticsGraphData
  | StatisticsGraphAsync
  | StatisticsGraphError

/** A graph data */
export interface StatisticsGraphData {
  _: 'statisticsGraphData'
  /** Graph data in JSON format */
  jsonData: string
  /** If non-empty, a token which can be used to receive a zoomed in graph */
  zoomToken: string
}

/** The graph data to be asynchronously loaded through getChatStatisticsGraph */
export interface StatisticsGraphAsync {
  _: 'statisticsGraphAsync'
  /** The token to use for data loading */
  token: string
}

/** An error message to be shown to the user instead of the graph */
export interface StatisticsGraphError {
  _: 'statisticsGraphError'
  /** The error message */
  errorMessage: string
}
