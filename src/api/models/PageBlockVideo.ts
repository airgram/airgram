import { RichTextUnion, Video } from '../outputs'

/** A video */
export class PageBlockVideoBaseModel {
  public _: 'pageBlockVideo'
  /** Video file; may be null */
  public video?: Video
  /** Video caption */
  public caption: RichTextUnion
  /** True, if the video should be played automatically */
  public needAutoplay: boolean
  /** True, if the video should be looped */
  public isLooped: boolean
}
