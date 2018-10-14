import { DocumentUnion } from './Document'
import { PageBlockUnion } from './PageBlock'
import { PhotoUnion } from './Photo'

export interface PageFull {
  _: 'pageFull'
  blocks: PageBlockUnion[]
  photos: PhotoUnion[]
  documents: DocumentUnion[]
}

export interface PagePart {
  _: 'pagePart'
  blocks: PageBlockUnion[]
  photos: PhotoUnion[]
  documents: DocumentUnion[]
}

export type PageUnion = PageFull
  | PagePart
