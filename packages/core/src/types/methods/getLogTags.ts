import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LogTagsUnion } from '../outputs'



/**
 * Returns list of available TDLib internal log tags, for example, ["actor", "binlog",
 * "connections", "notifications", "proxy"]. This is an offline method. Can be called
 * before authorization. Can be called synchronously
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, LogTagsUnion>>}
 */
export type getLogTags = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, LogTagsUnion>>

export type getLogTagsSync = (params?: never) => LogTagsUnion
