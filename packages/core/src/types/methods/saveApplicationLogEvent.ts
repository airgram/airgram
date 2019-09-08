import { ApiRequestOptions, ApiResponse } from '../airgram'
import { JsonValueInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SaveApplicationLogEventParams {
  type?: string // Event type
  chatId?: number // Optional chat identifier, associated with the event
  data?: JsonValueInputUnion // The log event data
}

/**
 * Saves application log event on the server. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.type] - Event type
 * @param {number} [params.chatId] - Optional chat identifier, associated with the
 * event
 * @param {JsonValueInputUnion} [params.data] - The log event data
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SaveApplicationLogEventParams, OkUnion>>}
 */
export type saveApplicationLogEvent<ExtensionT> = (
  params?: SaveApplicationLogEventParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SaveApplicationLogEventParams, OkUnion> & ExtensionT>
