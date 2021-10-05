import { Animation, PageBlockCaption } from '@airgram/core'

/** An animation */
export class PageBlockAnimationBaseModel {
  public _: 'pageBlockAnimation'

  /** Animation file; may be null */
  public animation?: Animation

  /** Animation caption */
  public caption: PageBlockCaption

  /** True, if the animation must be played automatically */
  public needAutoplay: boolean
}
