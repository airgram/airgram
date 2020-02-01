import { ApiRequestOptions, ApiResponse } from '../airgram'
import { JsonValueInputUnion } from '../inputs'
import { TextUnion } from '../outputs'

export interface GetJsonStringParams {
  jsonValue?: JsonValueInputUnion // The JsonValue object
}

/**
 * Converts a JsonValue object to corresponding JSON-serialized string. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {JsonValueInputUnion} [params.jsonValue] - The JsonValue object
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetJsonStringParams, TextUnion>>}
 */
export type getJsonString = (
  params?: GetJsonStringParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetJsonStringParams, TextUnion>>

export type getJsonStringSync = (params?: GetJsonStringParams) => TextUnion
