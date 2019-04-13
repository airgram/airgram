import { TextUnion } from '../outputs'

/**
 * Returns the extension of a file, guessed by its MIME type. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 * @param {Object} params
 * @param {string} [params.mimeType] - The MIME type of the file
 * @param {Object} state
 * @returns {TextUnion}
 */
export type GetFileExtensionMethod = <ResponseT = TextUnion>(
  params: GetFileExtensionParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetFileExtensionParams {
  /** The MIME type of the file */
  mimeType?: string
}
