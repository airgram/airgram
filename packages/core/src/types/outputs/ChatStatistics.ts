import {
  ChatStatisticsMessageInteractionCounters,
  DateRange,
  StatisticsGraphUnion,
  StatisticsValue
} from './index'

export type ChatStatisticsUnion = ChatStatistics

/** A detailed statistics about a chat */
export interface ChatStatistics {
  _: 'chatStatistics'
  /** A period to which the statistics applies */
  period: DateRange
  /** Number of members in the chat */
  memberCount: StatisticsValue
  /** Mean number of times the recently sent messages was viewed */
  meanViewCount: StatisticsValue
  /** Mean number of times the recently sent messages was shared */
  meanShareCount: StatisticsValue
  /** A percentage of users with enabled notifications for the chat */
  enabledNotificationsPercentage: number
  /** A graph containing number of members in the chat */
  memberCountGraph: StatisticsGraphUnion
  /** A graph containing number of members joined and left the chat */
  joinGraph: StatisticsGraphUnion
  /** A graph containing number of members muted and unmuted the chat */
  muteGraph: StatisticsGraphUnion
  /** A graph containing number of message views in a given hour in the last two weeks */
  viewCountByHourGraph: StatisticsGraphUnion
  /** A graph containing number of message views per source */
  viewCountBySourceGraph: StatisticsGraphUnion
  /** A graph containing number of new member joins per source */
  joinBySourceGraph: StatisticsGraphUnion
  /** A graph containing number of users viewed chat messages per language */
  languageGraph: StatisticsGraphUnion
  /** A graph containing number of chat message views and shares */
  messageInteractionGraph: StatisticsGraphUnion
  /** A graph containing number of views of associated with the chat instant views */
  instantViewInteractionGraph: StatisticsGraphUnion
  /** Detailed statistics about number of views and shares of recently sent messages */
  recentMessageInteractions: ChatStatisticsMessageInteractionCounters[]
}
