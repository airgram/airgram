import { PageBlockCaption, Video } from '@airgram/core'

/** A video */
export class PageBlockVideoBaseModel {
  public _: 'pageBlockVideo'

  /** Video file; may be null */
  public video?: Video

  /** Video caption */
  public caption: PageBlockCaption

  /** True, if the video must be played automatically */
  public needAutoplay: boolean

  /** True, if the video must be looped */
  public isLooped: boolean
}
