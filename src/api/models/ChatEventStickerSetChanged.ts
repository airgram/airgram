/** The supergroup sticker set was changed */
export class ChatEventStickerSetChangedBaseModel {
  public _: 'chatEventStickerSetChanged'
  /** Previous identifier of the chat sticker set; 0 if none */
  public oldStickerSetId: number | string
  /** New identifier of the chat sticker set; 0 if none */
  public newStickerSetId: number | string
}
