import { FileTypeUnion, NetworkTypeUnion } from '@airgram/core'

/**
 * Contains information about the total amount of data that was used to send and receive
 * files
 */
export class NetworkStatisticsEntryFileBaseModel {
  public _: 'networkStatisticsEntryFile'

  /** Type of the file the data is part of */
  public fileType: FileTypeUnion

  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  public networkType: NetworkTypeUnion

  /** Total number of bytes sent */
  public sentBytes: number

  /** Total number of bytes received */
  public receivedBytes: number
}
