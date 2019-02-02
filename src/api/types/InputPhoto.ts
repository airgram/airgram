
export interface InputPhoto {
  _: 'inputPhoto'
  id: string
  access_hash: string
}

export interface InputPhotoEmpty {
  _: 'inputPhotoEmpty'
}

export type InputPhotoUnion = InputPhoto
  | InputPhotoEmpty
