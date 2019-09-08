/** The list of recently used stickers was updated */
export class UpdateRecentStickersBaseModel {
  public _: 'updateRecentStickers'

  /**
   * True, if the list of stickers attached to photo or video files was updated, otherwise
   * the list of sent stickers is updated
   */
  public isAttached: boolean

  /** The new list of file identifiers of recently used stickers */
  public stickerIds: number[]
}
