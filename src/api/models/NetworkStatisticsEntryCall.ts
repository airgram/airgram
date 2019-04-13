import { NetworkTypeUnion } from '../outputs'

/** Contains information about the total amount of data that was used for calls */
export class NetworkStatisticsEntryCallBaseModel {
  public _: 'networkStatisticsEntryCall'
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  public networkType: NetworkTypeUnion
  /** Total number of bytes sent */
  public sentBytes: number
  /** Total number of bytes received */
  public receivedBytes: number
  /** Total call duration, in seconds */
  public duration: number
}
