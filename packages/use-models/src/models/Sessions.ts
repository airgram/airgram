import { Session } from '@airgram/core'

/** Contains a list of sessions */
export class SessionsBaseModel {
  public _: 'sessions'

  /** List of sessions */
  public sessions: Session[]

  /**
   * Number of days of inactivity before sessions will automatically be terminated; 1-366
   * days
   */
  public inactiveSessionTtlDays: number
}
