import { Session } from './index'

export type SessionsUnion = Sessions

/** Contains a list of sessions */
export interface Sessions {
  _: 'sessions'
  /** List of sessions */
  sessions: Session[]
  /**
   * Number of days of inactivity before sessions will automatically be terminated; 1-366
   * days
   */
  inactiveSessionTtlDays: number
}
