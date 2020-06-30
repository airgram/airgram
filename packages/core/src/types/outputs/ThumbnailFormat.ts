/** Describes format of the thumbnail */
export type ThumbnailFormatUnion = ThumbnailFormatJpeg
  | ThumbnailFormatPng
  | ThumbnailFormatWebp
  | ThumbnailFormatGif
  | ThumbnailFormatTgs
  | ThumbnailFormatMpeg4

/** The thumbnail is in JPEG format */
export interface ThumbnailFormatJpeg {
  _: 'thumbnailFormatJpeg'
}

/** The thumbnail is in PNG format. It will be used only for background patterns */
export interface ThumbnailFormatPng {
  _: 'thumbnailFormatPng'
}

/** The thumbnail is in WEBP format. It will be used only for some stickers */
export interface ThumbnailFormatWebp {
  _: 'thumbnailFormatWebp'
}

/** The thumbnail is in static GIF format. It will be used only for some bot inline results */
export interface ThumbnailFormatGif {
  _: 'thumbnailFormatGif'
}

/** The thumbnail is in TGS format. It will be used only for animated sticker sets */
export interface ThumbnailFormatTgs {
  _: 'thumbnailFormatTgs'
}

/** The thumbnail is in MPEG4 format. It will be used only for some animations and videos */
export interface ThumbnailFormatMpeg4 {
  _: 'thumbnailFormatMpeg4'
}
