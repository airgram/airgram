/** Represents result of checking whether a name can be used for a new sticker set */
export type CheckStickerSetNameResultUnion = CheckStickerSetNameResultOk
  | CheckStickerSetNameResultNameInvalid
  | CheckStickerSetNameResultNameOccupied

/** The name can be set */
export interface CheckStickerSetNameResultOk {
  _: 'checkStickerSetNameResultOk'
}

/** The name is invalid */
export interface CheckStickerSetNameResultNameInvalid {
  _: 'checkStickerSetNameResultNameInvalid'
}

/** The name is occupied */
export interface CheckStickerSetNameResultNameOccupied {
  _: 'checkStickerSetNameResultNameOccupied'
}
