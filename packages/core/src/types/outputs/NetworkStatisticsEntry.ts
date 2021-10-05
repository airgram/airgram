import { FileTypeUnion, NetworkTypeUnion } from './index'

/** Contains statistics about network usage */
export type NetworkStatisticsEntryUnion = NetworkStatisticsEntryFile
  | NetworkStatisticsEntryCall

/**
 * Contains information about the total amount of data that was used to send and receive
 * files
 */
export interface NetworkStatisticsEntryFile {
  _: 'networkStatisticsEntryFile'
  /** Type of the file the data is part of; pass null if the data isn't related to files */
  fileType: FileTypeUnion
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  networkType: NetworkTypeUnion
  /** Total number of bytes sent */
  sentBytes: number
  /** Total number of bytes received */
  receivedBytes: number
}

/** Contains information about the total amount of data that was used for calls */
export interface NetworkStatisticsEntryCall {
  _: 'networkStatisticsEntryCall'
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  networkType: NetworkTypeUnion
  /** Total number of bytes sent */
  sentBytes: number
  /** Total number of bytes received */
  receivedBytes: number
  /** Total call duration, in seconds */
  duration: number
}
