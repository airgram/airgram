/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  InputDocumentUnion,
  InputStickerSetUnion,
  InputStickerSetItemUnion,
  InputUserUnion,
  MessagesStickerSetUnion
} from '../'

export interface AddStickerToSetParams {
  sticker: InputStickerSetItemUnion,
  stickerset: InputStickerSetUnion
}

export interface ChangeStickerPositionParams {
  position: number,
  sticker: InputDocumentUnion
}

export interface CreateStickerSetParams {
  flags?: number,
  short_name: string,
  stickers: InputStickerSetItemUnion[],
  title: string,
  user_id: InputUserUnion,
  masks?: true
}

export interface RemoveStickerFromSetParams {
  sticker: InputDocumentUnion
}

export interface StickersApi {
  addStickerToSet: (params: AddStickerToSetParams, options?: ag.MtpRequestOptions) => Promise<MessagesStickerSetUnion>
  changeStickerPosition: (params: ChangeStickerPositionParams, options?: ag.MtpRequestOptions) => Promise<MessagesStickerSetUnion>
  createStickerSet: (params: CreateStickerSetParams, options?: ag.MtpRequestOptions) => Promise<MessagesStickerSetUnion>
  removeStickerFromSet: (params: RemoveStickerFromSetParams, options?: ag.MtpRequestOptions) => Promise<MessagesStickerSetUnion>
}

export const factory = (callApi: ag.CallApiFn): StickersApi => ({
  addStickerToSet: (params: AddStickerToSetParams, options?: ag.MtpRequestOptions): Promise<MessagesStickerSetUnion> =>
    callApi<AddStickerToSetParams, MessagesStickerSetUnion>('stickers.addStickerToSet', params, options),

  changeStickerPosition: (params: ChangeStickerPositionParams, options?: ag.MtpRequestOptions): Promise<MessagesStickerSetUnion> =>
    callApi<ChangeStickerPositionParams, MessagesStickerSetUnion>('stickers.changeStickerPosition', params, options),

  createStickerSet: (params: CreateStickerSetParams, options?: ag.MtpRequestOptions): Promise<MessagesStickerSetUnion> =>
    callApi<CreateStickerSetParams, MessagesStickerSetUnion>('stickers.createStickerSet', params, options),

  removeStickerFromSet: (params: RemoveStickerFromSetParams, options?: ag.MtpRequestOptions): Promise<MessagesStickerSetUnion> =>
    callApi<RemoveStickerFromSetParams, MessagesStickerSetUnion>('stickers.removeStickerFromSet', params, options)
})
