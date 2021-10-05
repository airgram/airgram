export type StorageStatisticsFastUnion = StorageStatisticsFast

/** Contains approximate storage usage statistics, excluding files of unknown file type */
export interface StorageStatisticsFast {
  _: 'storageStatisticsFast'
  /** Approximate total size of files, in bytes */
  filesSize: number
  /** Approximate number of files */
  fileCount: number
  /** Size of the database */
  databaseSize: number
  /** Size of the language pack database */
  languagePackDatabaseSize: number
  /** Size of the TDLib internal log */
  logSize: number
}
