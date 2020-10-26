import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputChatPhotoInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetProfilePhotoParams {
  photo?: InputChatPhotoInputUnion // Profile photo to set
}

/**
 * Changes a profile photo for the current user
 * @param {Object} params
 * @param {InputChatPhotoInputUnion} [params.photo] - Profile photo to set
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetProfilePhotoParams, OkUnion>>}
 */
export type setProfilePhoto = (
  params?: SetProfilePhotoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetProfilePhotoParams, OkUnion>>
