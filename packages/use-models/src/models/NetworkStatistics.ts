import { NetworkStatisticsEntryUnion } from '@airgram/core'

/** A full list of available network statistic entries */
export class NetworkStatisticsBaseModel {
  public _: 'networkStatistics'

  /** Point in time (Unix timestamp) from which the statistics are collected */
  public sinceDate: number

  /** Network statistics entries */
  public entries: NetworkStatisticsEntryUnion[]
}
