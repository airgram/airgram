import { Call } from '@airgram/core'

/** New call was created or information about a call was updated */
export class UpdateCallBaseModel {
  public _: 'updateCall'

  /** New data about a call */
  public call: Call
}
