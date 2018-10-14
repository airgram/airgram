import { DocumentUnion } from './Document'
import { PageUnion } from './Page'
import { PhotoUnion } from './Photo'

export interface WebPage {
  _: 'webPage'
  flags: number
  id: number
  url: string
  display_url: string
  hash: number
  type?: string
  site_name?: string
  title?: string
  description?: string
  photo?: PhotoUnion
  embed_url?: string
  embed_type?: string
  embed_width?: number
  embed_height?: number
  duration?: number
  author?: string
  document?: DocumentUnion
  cached_page?: PageUnion
}

export interface WebPageEmpty {
  _: 'webPageEmpty'
  id: number
}

export interface WebPageNotModified {
  _: 'webPageNotModified'
}

export interface WebPagePending {
  _: 'webPagePending'
  id: number
  date: number
}

export type WebPageUnion = WebPage
  | WebPageEmpty
  | WebPageNotModified
  | WebPagePending
