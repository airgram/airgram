import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Uploads a new profile photo for the current user. If something changes, updateUser
 * will be sent
 * @param {Object} params
 * @param {InputFileInputUnion} [params.photo] - Profile photo to set. inputFileId
 * and inputFileRemote may still be unsupported
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetProfilePhotoMethod = <ResponseT = OkUnion>(
  params: SetProfilePhotoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetProfilePhotoParams {
  /** Profile photo to set. inputFileId and inputFileRemote may still be unsupported */
  photo?: InputFileInputUnion
}
