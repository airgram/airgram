/** The list of favorite stickers was updated */
export class UpdateFavoriteStickersBaseModel {
  public _: 'updateFavoriteStickers'
  /** The new list of file identifiers of favorite stickers */
  public stickerIds: number[]
}
