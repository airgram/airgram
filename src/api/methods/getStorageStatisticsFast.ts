import { StorageStatisticsFastUnion } from '../outputs'

/**
 * Quickly returns approximate storage usage statistics
 * @param {Object} state
 * @returns {StorageStatisticsFastUnion}
 */
export type GetStorageStatisticsFastMethod = <ResponseT = StorageStatisticsFastUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
