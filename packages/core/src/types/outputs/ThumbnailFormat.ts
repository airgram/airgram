/** Describes format of a thumbnail */
export type ThumbnailFormatUnion = ThumbnailFormatJpeg
  | ThumbnailFormatGif
  | ThumbnailFormatMpeg4
  | ThumbnailFormatPng
  | ThumbnailFormatTgs
  | ThumbnailFormatWebm
  | ThumbnailFormatWebp

/** The thumbnail is in JPEG format */
export interface ThumbnailFormatJpeg {
  _: 'thumbnailFormatJpeg'
}

/** The thumbnail is in static GIF format. It will be used only for some bot inline results */
export interface ThumbnailFormatGif {
  _: 'thumbnailFormatGif'
}

/** The thumbnail is in MPEG4 format. It will be used only for some animations and videos */
export interface ThumbnailFormatMpeg4 {
  _: 'thumbnailFormatMpeg4'
}

/** The thumbnail is in PNG format. It will be used only for background patterns */
export interface ThumbnailFormatPng {
  _: 'thumbnailFormatPng'
}

/** The thumbnail is in TGS format. It will be used only for TGS sticker sets */
export interface ThumbnailFormatTgs {
  _: 'thumbnailFormatTgs'
}

/** The thumbnail is in WEBM format. It will be used only for WEBM sticker sets */
export interface ThumbnailFormatWebm {
  _: 'thumbnailFormatWebm'
}

/** The thumbnail is in WEBP format. It will be used only for some stickers */
export interface ThumbnailFormatWebp {
  _: 'thumbnailFormatWebp'
}
