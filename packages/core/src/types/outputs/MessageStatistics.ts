import { StatisticalGraphUnion } from './index'

export type MessageStatisticsUnion = MessageStatistics

/** A detailed statistics about a message */
export interface MessageStatistics {
  _: 'messageStatistics'
  /** A graph containing number of message views and shares */
  messageInteractionGraph: StatisticalGraphUnion
}
