export type StorageStatisticsFastUnion = StorageStatisticsFast

/** Contains approximate storage usage statistics, excluding files of unknown file type */
export interface StorageStatisticsFast {
  _: 'storageStatisticsFast'
  /** Approximate total size of files */
  filesSize: number
  /** Approximate number of files */
  fileCount: number
  /** Size of the database */
  databaseSize: number
}
