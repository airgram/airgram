import { Session } from './index'

export type SessionsUnion = Sessions

/** Contains a list of sessions */
export interface Sessions {
  _: 'sessions'
  /** List of sessions */
  sessions: Session[]
}
