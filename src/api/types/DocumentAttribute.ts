import { InputStickerSetUnion } from './InputStickerSet'
import { MaskCoordsUnion } from './MaskCoords'

export interface DocumentAttributeAnimated {
  _: 'documentAttributeAnimated'
}

export interface DocumentAttributeAudio {
  _: 'documentAttributeAudio'
  flags: number
  voice?: true
  duration: number
  title?: string
  performer?: string
  waveform?: number[]
}

export interface DocumentAttributeFilename {
  _: 'documentAttributeFilename'
  file_name: string
}

export interface DocumentAttributeHasStickers {
  _: 'documentAttributeHasStickers'
}

export interface DocumentAttributeImageSize {
  _: 'documentAttributeImageSize'
  w: number
  h: number
}

export interface DocumentAttributeSticker {
  _: 'documentAttributeSticker'
  flags: number
  mask?: true
  alt: string
  stickerset: InputStickerSetUnion
  mask_coords?: MaskCoordsUnion
}

export interface DocumentAttributeVideo {
  _: 'documentAttributeVideo'
  flags: number
  round_message?: true
  duration: number
  w: number
  h: number
}

export type DocumentAttributeUnion = DocumentAttributeAnimated
  | DocumentAttributeAudio
  | DocumentAttributeFilename
  | DocumentAttributeHasStickers
  | DocumentAttributeImageSize
  | DocumentAttributeSticker
  | DocumentAttributeVideo
