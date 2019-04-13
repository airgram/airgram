import { TextUnion } from '../outputs'

/**
 * Returns the MIME type of a file, guessed by its extension. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 * @param {Object} params
 * @param {string} [params.fileName] - The name of the file or path to the file
 * @param {Object} state
 * @returns {TextUnion}
 */
export type GetFileMimeTypeMethod = <ResponseT = TextUnion>(
  params: GetFileMimeTypeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetFileMimeTypeParams {
  /** The name of the file or path to the file */
  fileName?: string
}
