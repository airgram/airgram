import { ApiRequestOptions, ApiResponse } from '../airgram'
import { JsonValueUnion } from '../outputs'

export interface GetJsonValueParams {
  json?: string // The JSON-serialized string
}

/**
 * Converts a JSON-serialized string to corresponding JsonValue object. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.json] - The JSON-serialized string
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetJsonValueParams, JsonValueUnion>>}
 */
export type getJsonValue = (
  params?: GetJsonValueParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetJsonValueParams, JsonValueUnion>>

export type getJsonValueSync = (params?: GetJsonValueParams) => JsonValueUnion
