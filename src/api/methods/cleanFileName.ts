import { TextUnion } from '../outputs'

/**
 * Removes potentially dangerous characters from the name of a file. The encoding of
 * the file name is supposed to be UTF-8. Returns an empty string on failure. This is
 * an offline method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.fileName] - File name or path to the file
 * @param {Object} state
 * @returns {TextUnion}
 */
export type CleanFileNameMethod = <ResponseT = TextUnion>(
  params: CleanFileNameParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CleanFileNameParams {
  /** File name or path to the file */
  fileName?: string
}
