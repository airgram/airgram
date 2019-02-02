
export interface InputStickerSetEmpty {
  _: 'inputStickerSetEmpty'
}

export interface InputStickerSetId {
  _: 'inputStickerSetID'
  id: string
  access_hash: string
}

export interface InputStickerSetShortName {
  _: 'inputStickerSetShortName'
  short_name: string
}

export type InputStickerSetUnion = InputStickerSetEmpty
  | InputStickerSetId
  | InputStickerSetShortName
