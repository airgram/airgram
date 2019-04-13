import { OkUnion } from '../outputs'

/**
 * Deletes a supergroup or channel along with all messages in the corresponding chat.
 * This will release the supergroup or channel username and remove all members; requires
 * creator privileges in the supergroup or channel. Chats with more than 1000 members
 * can't be deleted using this method
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteSupergroupMethod = <ResponseT = OkUnion>(
  params: DeleteSupergroupParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteSupergroupParams {
  /** Identifier of the supergroup or channel */
  supergroupId?: number
}
