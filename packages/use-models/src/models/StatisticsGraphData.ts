/** A graph data */
export class StatisticsGraphDataBaseModel {
  public _: 'statisticsGraphData'

  /** Graph data in JSON format */
  public jsonData: string

  /** If non-empty, a token which can be used to receive a zoomed in graph */
  public zoomToken: string
}
