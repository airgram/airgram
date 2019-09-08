import { Error } from '@airgram/core'

/** The call has ended with an error */
export class CallStateErrorBaseModel {
  public _: 'callStateError'

  /**
   * Error. An error with the code 4005000 will be returned if an outgoing call is missed
   * because of an expired timeout
   */
  public error: Error
}
