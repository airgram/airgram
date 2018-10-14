
export interface StickerSet {
  _: 'stickerSet'
  flags: number
  installed?: true
  archived?: true
  official?: true
  masks?: true
  id: number
  access_hash: number
  title: string
  short_name: string
  count: number
  hash: number
}

export type StickerSetUnion = StickerSet
