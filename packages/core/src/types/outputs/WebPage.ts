import {
  Animation,
  Audio,
  Document,
  FormattedText,
  Photo,
  Sticker,
  Video,
  VideoNote,
  VoiceNote
} from './index'

export type WebPageUnion = WebPage

/** Describes a web page preview */
export interface WebPage {
  _: 'webPage'
  /** Original URL of the link */
  url: string
  /** URL to display */
  displayUrl: string
  /**
   * Type of the web page. Can be: article, photo, audio, video, document, profile, app,
   * or something else
   */
  type: string
  /** Short name of the site (e.g., Google Docs, App Store) */
  siteName: string
  /** Title of the content */
  title: string
  /** Description of the content */
  description: FormattedText
  /** Image representing the content; may be null */
  photo?: Photo
  /** URL to show in the embedded preview */
  embedUrl: string
  /** MIME type of the embedded preview, (e.g., text/html or video/mp4) */
  embedType: string
  /** Width of the embedded preview */
  embedWidth: number
  /** Height of the embedded preview */
  embedHeight: number
  /** Duration of the content, in seconds */
  duration: number
  /** Author of the content */
  author: string
  /** Preview of the content as an animation, if available; may be null */
  animation?: Animation
  /** Preview of the content as an audio file, if available; may be null */
  audio?: Audio
  /**
   * Preview of the content as a document, if available (currently only available for
   * small PDF files and ZIP archives); may be null
   */
  document?: Document
  /** Preview of the content as a sticker for small WEBP files, if available; may be null */
  sticker?: Sticker
  /** Preview of the content as a video, if available; may be null */
  video?: Video
  /** Preview of the content as a video note, if available; may be null */
  videoNote?: VideoNote
  /** Preview of the content as a voice note, if available; may be null */
  voiceNote?: VoiceNote
  /**
   * Version of instant view, available for the web page (currently can be 1 or 2), 0
   * if none
   */
  instantViewVersion: number
}
