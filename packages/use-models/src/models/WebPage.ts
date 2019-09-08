import {
  Animation,
  Audio,
  Document,
  Photo,
  Sticker,
  Video,
  VideoNote,
  VoiceNote
} from '@airgram/core'

/** Describes a web page preview */
export class WebPageBaseModel {
  public _: 'webPage'

  /** Original URL of the link */
  public url: string

  /** URL to display */
  public displayUrl: string

  /**
   * Type of the web page. Can be: article, photo, audio, video, document, profile, app,
   * or something else
   */
  public type: string

  /** Short name of the site (e.g., Google Docs, App Store) */
  public siteName: string

  /** Title of the content */
  public title: string

  /** Description of the content */
  public description: string

  /** Image representing the content; may be null */
  public photo?: Photo

  /** URL to show in the embedded preview */
  public embedUrl: string

  /** MIME type of the embedded preview, (e.g., text/html or video/mp4) */
  public embedType: string

  /** Width of the embedded preview */
  public embedWidth: number

  /** Height of the embedded preview */
  public embedHeight: number

  /** Duration of the content, in seconds */
  public duration: number

  /** Author of the content */
  public author: string

  /** Preview of the content as an animation, if available; may be null */
  public animation?: Animation

  /** Preview of the content as an audio file, if available; may be null */
  public audio?: Audio

  /**
   * Preview of the content as a document, if available (currently only available for
   * small PDF files and ZIP archives); may be null
   */
  public document?: Document

  /** Preview of the content as a sticker for small WEBP files, if available; may be null */
  public sticker?: Sticker

  /** Preview of the content as a video, if available; may be null */
  public video?: Video

  /** Preview of the content as a video note, if available; may be null */
  public videoNote?: VideoNote

  /** Preview of the content as a voice note, if available; may be null */
  public voiceNote?: VoiceNote

  /**
   * Version of instant view, available for the web page (currently can be 1 or 2), 0
   * if none
   */
  public instantViewVersion: number
}
