/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  InputFileUnion,
  InputPhotoUnion,
  InputUserUnion,
  PhotosPhotoUnion,
  PhotosPhotosUnion,
  UserProfilePhotoUnion
} from '../'

export interface DeletePhotosParams {
  id: InputPhotoUnion[]
}

export interface GetUserPhotosParams {
  limit: number,
  max_id: string,
  offset: number,
  user_id: InputUserUnion
}

export interface UpdateProfilePhotoParams {
  id: InputPhotoUnion
}

export interface UploadProfilePhotoParams {
  file: InputFileUnion
}

export interface PhotosApi {
  deletePhotos: (params: DeletePhotosParams, options?: ag.MtpRequestOptions) => Promise<string[]>
  getUserPhotos: (params: GetUserPhotosParams, options?: ag.MtpRequestOptions) => Promise<PhotosPhotosUnion>
  updateProfilePhoto: (params: UpdateProfilePhotoParams, options?: ag.MtpRequestOptions) => Promise<UserProfilePhotoUnion>
  uploadProfilePhoto: (params: UploadProfilePhotoParams, options?: ag.MtpRequestOptions) => Promise<PhotosPhotoUnion>
}

export const factory = (callApi: ag.CallApiFn): PhotosApi => ({
  deletePhotos: (params: DeletePhotosParams, options?: ag.MtpRequestOptions): Promise<string[]> =>
    callApi<DeletePhotosParams, string[]>('photos.deletePhotos', params, options),

  getUserPhotos: (params: GetUserPhotosParams, options?: ag.MtpRequestOptions): Promise<PhotosPhotosUnion> =>
    callApi<GetUserPhotosParams, PhotosPhotosUnion>('photos.getUserPhotos', params, options),

  updateProfilePhoto: (params: UpdateProfilePhotoParams, options?: ag.MtpRequestOptions): Promise<UserProfilePhotoUnion> =>
    callApi<UpdateProfilePhotoParams, UserProfilePhotoUnion>('photos.updateProfilePhoto', params, options),

  uploadProfilePhoto: (params: UploadProfilePhotoParams, options?: ag.MtpRequestOptions): Promise<PhotosPhotoUnion> =>
    callApi<UploadProfilePhotoParams, PhotosPhotoUnion>('photos.uploadProfilePhoto', params, options)
})
