import { Location, PageBlockCaption } from '@airgram/core'

/** A map */
export class PageBlockMapBaseModel {
  public _: 'pageBlockMap'

  /** Location of the map center */
  public location: Location

  /** Map zoom level */
  public zoom: number

  /** Map width */
  public width: number

  /** Map height */
  public height: number

  /** Block caption */
  public caption: PageBlockCaption
}
