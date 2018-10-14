import { PhotoSizeUnion } from './PhotoSize'

export interface WallPaper {
  _: 'wallPaper'
  id: number
  title: string
  sizes: PhotoSizeUnion[]
  color: number
}

export interface WallPaperSolid {
  _: 'wallPaperSolid'
  id: number
  title: string
  bg_color: number
  color: number
}

export type WallPaperUnion = WallPaper
  | WallPaperSolid
