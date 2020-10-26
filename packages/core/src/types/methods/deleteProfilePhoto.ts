import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteProfilePhotoParams {
  profilePhotoId?: string // Identifier of the profile photo to delete
}

/**
 * Deletes a profile photo
 * @param {Object} params
 * @param {string} [params.profilePhotoId] - Identifier of the profile photo to delete
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteProfilePhotoParams, OkUnion>>}
 */
export type deleteProfilePhoto = (
  params?: DeleteProfilePhotoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteProfilePhotoParams, OkUnion>>
