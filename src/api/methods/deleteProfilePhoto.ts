import { OkUnion } from '../outputs'

/**
 * Deletes a profile photo. If something changes, updateUser will be sent
 * @param {Object} params
 * @param {number | string} [params.profilePhotoId] - Identifier of the profile photo
 * to delete
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteProfilePhotoMethod = <ResponseT = OkUnion>(
  params: DeleteProfilePhotoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteProfilePhotoParams {
  /** Identifier of the profile photo to delete */
  profilePhotoId?: number | string
}
