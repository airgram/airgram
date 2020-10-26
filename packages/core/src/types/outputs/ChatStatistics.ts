import {
  ChatStatisticsAdministratorActionsInfo,
  ChatStatisticsInviterInfo,
  ChatStatisticsMessageInteractionInfo,
  ChatStatisticsMessageSenderInfo,
  DateRange,
  StatisticsGraphUnion,
  StatisticsValue
} from './index'

/** Contains a detailed statistics about a chat */
export type ChatStatisticsUnion = ChatStatisticsSupergroup
  | ChatStatisticsChannel

/** A detailed statistics about a supergroup chat */
export interface ChatStatisticsSupergroup {
  _: 'chatStatisticsSupergroup'
  /** A period to which the statistics applies */
  period: DateRange
  /** Number of members in the chat */
  memberCount: StatisticsValue
  /** Number of messages sent to the chat */
  messageCount: StatisticsValue
  /** Number of users who viewed messages in the chat */
  viewerCount: StatisticsValue
  /** Number of users who sent messages to the chat */
  senderCount: StatisticsValue
  /** A graph containing number of members in the chat */
  memberCountGraph: StatisticsGraphUnion
  /** A graph containing number of members joined and left the chat */
  joinGraph: StatisticsGraphUnion
  /** A graph containing number of new member joins per source */
  joinBySourceGraph: StatisticsGraphUnion
  /** A graph containing distribution of active users per language */
  languageGraph: StatisticsGraphUnion
  /** A graph containing distribution of sent messages by content type */
  messageContentGraph: StatisticsGraphUnion
  /** A graph containing number of different actions in the chat */
  actionGraph: StatisticsGraphUnion
  /** A graph containing distribution of message views per hour */
  dayGraph: StatisticsGraphUnion
  /** A graph containing distribution of message views per day of week */
  weekGraph: StatisticsGraphUnion
  /** List of users sent most messages in the last week */
  topSenders: ChatStatisticsMessageSenderInfo[]
  /** List of most active administrators in the last week */
  topAdministrators: ChatStatisticsAdministratorActionsInfo[]
  /** List of most active inviters of new members in the last week */
  topInviters: ChatStatisticsInviterInfo[]
}

/** A detailed statistics about a channel chat */
export interface ChatStatisticsChannel {
  _: 'chatStatisticsChannel'
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
  recentMessageInteractions: ChatStatisticsMessageInteractionInfo[]
}
