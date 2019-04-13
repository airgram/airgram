/** The list of installed sticker sets was updated */
export class UpdateInstalledStickerSetsBaseModel {
  public _: 'updateInstalledStickerSets'
  /** True, if the list of installed mask sticker sets was updated */
  public isMasks: boolean
  /** The new list of installed ordinary sticker sets */
  public stickerSetIds: number | string[]
}
