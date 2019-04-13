import { UserProfilePhotosUnion } from '../outputs'

/**
 * Returns the profile photos of a user. The result of this query may be outdated: some
 * photos might have been deleted already
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.offset] - The number of photos to skip; must be non-negative
 * @param {number} [params.limit] - Maximum number of photos to be returned; up to
 * 100
 * @param {Object} state
 * @returns {UserProfilePhotosUnion}
 */
export type GetUserProfilePhotosMethod = <ResponseT = UserProfilePhotosUnion>(
  params: GetUserProfilePhotosParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetUserProfilePhotosParams {
  /** User identifier */
  userId?: number
  /** The number of photos to skip; must be non-negative */
  offset?: number
  /** Maximum number of photos to be returned; up to 100 */
  limit?: number
}
