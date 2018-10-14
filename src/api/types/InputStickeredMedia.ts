import { InputDocumentUnion } from './InputDocument'
import { InputPhotoUnion } from './InputPhoto'

export interface InputStickeredMediaDocument {
  _: 'inputStickeredMediaDocument'
  id: InputDocumentUnion
}

export interface InputStickeredMediaPhoto {
  _: 'inputStickeredMediaPhoto'
  id: InputPhotoUnion
}

export type InputStickeredMediaUnion = InputStickeredMediaDocument
  | InputStickeredMediaPhoto
