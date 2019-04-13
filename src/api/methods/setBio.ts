import { OkUnion } from '../outputs'

/**
 * Changes the bio of the current user
 * @param {Object} params
 * @param {string} [params.bio] - The new value of the user bio; 0-70 characters
 * without line feeds
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetBioMethod = <ResponseT = OkUnion>(
  params: SetBioParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetBioParams {
  /** The new value of the user bio; 0-70 characters without line feeds */
  bio?: string
}
