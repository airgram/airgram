import { FileTypeInputUnion, NetworkTypeInputUnion } from './index'

/** Contains statistics about network usage */
export type NetworkStatisticsEntryInputUnion = NetworkStatisticsEntryFileInput
  | NetworkStatisticsEntryCallInput

/**
 * Contains information about the total amount of data that was used to send and receive
 * files
 */
export interface NetworkStatisticsEntryFileInput {
  _: 'networkStatisticsEntryFile'
  /** Type of the file the data is part of; pass null if the data isn't related to files */
  fileType?: FileTypeInputUnion
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  networkType?: NetworkTypeInputUnion
  /** Total number of bytes sent */
  sentBytes?: number
  /** Total number of bytes received */
  receivedBytes?: number
}

/** Contains information about the total amount of data that was used for calls */
export interface NetworkStatisticsEntryCallInput {
  _: 'networkStatisticsEntryCall'
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  networkType?: NetworkTypeInputUnion
  /** Total number of bytes sent */
  sentBytes?: number
  /** Total number of bytes received */
  receivedBytes?: number
  /** Total call duration, in seconds */
  duration?: number
}
