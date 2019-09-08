import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetProfilePhotoParams {
  photo?: InputFileInputUnion // Profile photo to set. inputFileId and inputFileRemote may still be unsupported
}

/**
 * Uploads a new profile photo for the current user. If something changes, updateUser
 * will be sent
 * @param {Object} params
 * @param {InputFileInputUnion} [params.photo] - Profile photo to set. inputFileId
 * and inputFileRemote may still be unsupported
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetProfilePhotoParams, OkUnion>>}
 */
export type setProfilePhoto<ExtensionT> = (
  params?: SetProfilePhotoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetProfilePhotoParams, OkUnion> & ExtensionT>
