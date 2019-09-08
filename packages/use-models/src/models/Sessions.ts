import { Session } from '@airgram/core'

/** Contains a list of sessions */
export class SessionsBaseModel {
  public _: 'sessions'

  /** List of sessions */
  public sessions: Session[]
}
