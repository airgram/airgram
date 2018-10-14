import { InputDocumentUnion } from './InputDocument'
import { MaskCoordsUnion } from './MaskCoords'

export interface InputStickerSetItem {
  _: 'inputStickerSetItem'
  flags: number
  document: InputDocumentUnion
  emoji: string
  mask_coords?: MaskCoordsUnion
}

export type InputStickerSetItemUnion = InputStickerSetItem
