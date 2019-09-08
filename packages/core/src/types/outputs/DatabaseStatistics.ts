export type DatabaseStatisticsUnion = DatabaseStatistics

/** Contains database statistics */
export interface DatabaseStatistics {
  _: 'databaseStatistics'
  /** Database statistics in an unspecified human-readable format */
  statistics: string
}
