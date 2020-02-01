import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CanTransferOwnershipResultUnion } from '../outputs'



/**
 * Checks whether the current session can be used to transfer a chat ownership to another
 * user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, CanTransferOwnershipResultUnion>>}
 */
export type canTransferOwnership = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, CanTransferOwnershipResultUnion>>
