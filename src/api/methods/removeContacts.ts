import { OkUnion } from '../outputs'

/**
 * Removes users from the contacts list
 * @param {Object} params
 * @param {number[]} [params.userIds] - Identifiers of users to be deleted
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveContactsMethod = <ResponseT = OkUnion>(
  params: RemoveContactsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveContactsParams {
  /** Identifiers of users to be deleted */
  userIds?: number[]
}
