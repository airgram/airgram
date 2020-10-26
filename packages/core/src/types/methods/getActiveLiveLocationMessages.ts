import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessagesUnion } from '../outputs'



/**
 * Returns all active live locations that should be updated by the application. The
 * list is persistent across application restarts only if the message database is used
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, MessagesUnion>>}
 */
export type getActiveLiveLocationMessages = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, MessagesUnion>>
