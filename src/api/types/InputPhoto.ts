
export interface InputPhoto {
  _: 'inputPhoto'
  id: number
  access_hash: number
}

export interface InputPhotoEmpty {
  _: 'inputPhotoEmpty'
}

export type InputPhotoUnion = InputPhoto
  | InputPhotoEmpty
