/**
 * The link is a link to a sticker set. Call searchStickerSet with the given sticker
 * set name to process the link and show the sticker set
 */
export class InternalLinkTypeStickerSetBaseModel {
  public _: 'internalLinkTypeStickerSet'

  /** Name of the sticker set */
  public stickerSetName: string
}
