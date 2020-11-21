import {
  ChatStatisticsAdministratorActionsInfo,
  ChatStatisticsInviterInfo,
  ChatStatisticsMessageInteractionInfo,
  ChatStatisticsMessageSenderInfo,
  DateRange,
  StatisticalGraphUnion,
  StatisticalValue
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
  memberCount: StatisticalValue
  /** Number of messages sent to the chat */
  messageCount: StatisticalValue
  /** Number of users who viewed messages in the chat */
  viewerCount: StatisticalValue
  /** Number of users who sent messages to the chat */
  senderCount: StatisticalValue
  /** A graph containing number of members in the chat */
  memberCountGraph: StatisticalGraphUnion
  /** A graph containing number of members joined and left the chat */
  joinGraph: StatisticalGraphUnion
  /** A graph containing number of new member joins per source */
  joinBySourceGraph: StatisticalGraphUnion
  /** A graph containing distribution of active users per language */
  languageGraph: StatisticalGraphUnion
  /** A graph containing distribution of sent messages by content type */
  messageContentGraph: StatisticalGraphUnion
  /** A graph containing number of different actions in the chat */
  actionGraph: StatisticalGraphUnion
  /** A graph containing distribution of message views per hour */
  dayGraph: StatisticalGraphUnion
  /** A graph containing distribution of message views per day of week */
  weekGraph: StatisticalGraphUnion
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
  memberCount: StatisticalValue
  /** Mean number of times the recently sent messages was viewed */
  meanViewCount: StatisticalValue
  /** Mean number of times the recently sent messages was shared */
  meanShareCount: StatisticalValue
  /** A percentage of users with enabled notifications for the chat */
  enabledNotificationsPercentage: number
  /** A graph containing number of members in the chat */
  memberCountGraph: StatisticalGraphUnion
  /** A graph containing number of members joined and left the chat */
  joinGraph: StatisticalGraphUnion
  /** A graph containing number of members muted and unmuted the chat */
  muteGraph: StatisticalGraphUnion
  /** A graph containing number of message views in a given hour in the last two weeks */
  viewCountByHourGraph: StatisticalGraphUnion
  /** A graph containing number of message views per source */
  viewCountBySourceGraph: StatisticalGraphUnion
  /** A graph containing number of new member joins per source */
  joinBySourceGraph: StatisticalGraphUnion
  /** A graph containing number of users viewed chat messages per language */
  languageGraph: StatisticalGraphUnion
  /** A graph containing number of chat message views and shares */
  messageInteractionGraph: StatisticalGraphUnion
  /** A graph containing number of views of associated with the chat instant views */
  instantViewInteractionGraph: StatisticalGraphUnion
  /** Detailed statistics about number of views and shares of recently sent messages */
  recentMessageInteractions: ChatStatisticsMessageInteractionInfo[]
}
