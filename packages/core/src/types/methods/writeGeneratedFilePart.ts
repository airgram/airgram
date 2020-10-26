import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface WriteGeneratedFilePartParams {
  generationId?: string // The identifier of the generation process
  offset?: number // The offset from which to write the data to the file
  data?: string // The data to write
}

/**
 * Writes a part of a generated file. This method is intended to be used only if the
 * application has no direct access to TDLib's file system, because it is usually slower
 * than a direct write to the destination file
 * @param {Object} params
 * @param {string} [params.generationId] - The identifier of the generation process
 * @param {number} [params.offset] - The offset from which to write the data to the
 * file
 * @param {string} [params.data] - The data to write
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<WriteGeneratedFilePartParams, OkUnion>>}
 */
export type writeGeneratedFilePart = (
  params?: WriteGeneratedFilePartParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<WriteGeneratedFilePartParams, OkUnion>>
