import { InputFileUnion } from './InputFile'
import { InputPhotoUnion } from './InputPhoto'

export interface InputChatPhoto {
  _: 'inputChatPhoto'
  id: InputPhotoUnion
}

export interface InputChatPhotoEmpty {
  _: 'inputChatPhotoEmpty'
}

export interface InputChatUploadedPhoto {
  _: 'inputChatUploadedPhoto'
  file: InputFileUnion
}

export type InputChatPhotoUnion = InputChatPhoto
  | InputChatPhotoEmpty
  | InputChatUploadedPhoto
