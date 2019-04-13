import { NetworkStatisticsEntryUnion } from '../outputs'

/** A full list of available network statistic entries */
export class NetworkStatisticsBaseModel {
  public _: 'networkStatistics'
  /** Point in time (Unix timestamp) when the app began collecting statistics */
  public sinceDate: number
  /** Network statistics entries */
  public entries: NetworkStatisticsEntryUnion[]
}
