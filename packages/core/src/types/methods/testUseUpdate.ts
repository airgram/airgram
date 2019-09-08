import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UpdateUnion } from '../outputs'

/**
 * Does nothing and ensures that the Update object is used; for testing only. This is
 * an offline method. Can be called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, UpdateUnion>>}
 */
export type testUseUpdate<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, UpdateUnion> & ExtensionT>
