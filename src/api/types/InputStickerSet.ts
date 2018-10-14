
export interface InputStickerSetEmpty {
  _: 'inputStickerSetEmpty'
}

export interface InputStickerSetId {
  _: 'inputStickerSetID'
  id: number
  access_hash: number
}

export interface InputStickerSetShortName {
  _: 'inputStickerSetShortName'
  short_name: string
}

export type InputStickerSetUnion = InputStickerSetEmpty
  | InputStickerSetId
  | InputStickerSetShortName
