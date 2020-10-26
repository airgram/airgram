import {
  ChatStatisticsAdministratorActionsInfo,
  ChatStatisticsInviterInfo,
  ChatStatisticsMessageSenderInfo,
  DateRange,
  StatisticsGraphUnion,
  StatisticsValue
} from '@airgram/core'

/** A detailed statistics about a supergroup chat */
export class ChatStatisticsSupergroupBaseModel {
  public _: 'chatStatisticsSupergroup'

  /** A period to which the statistics applies */
  public period: DateRange

  /** Number of members in the chat */
  public memberCount: StatisticsValue

  /** Number of messages sent to the chat */
  public messageCount: StatisticsValue

  /** Number of users who viewed messages in the chat */
  public viewerCount: StatisticsValue

  /** Number of users who sent messages to the chat */
  public senderCount: StatisticsValue

  /** A graph containing number of members in the chat */
  public memberCountGraph: StatisticsGraphUnion

  /** A graph containing number of members joined and left the chat */
  public joinGraph: StatisticsGraphUnion

  /** A graph containing number of new member joins per source */
  public joinBySourceGraph: StatisticsGraphUnion

  /** A graph containing distribution of active users per language */
  public languageGraph: StatisticsGraphUnion

  /** A graph containing distribution of sent messages by content type */
  public messageContentGraph: StatisticsGraphUnion

  /** A graph containing number of different actions in the chat */
  public actionGraph: StatisticsGraphUnion

  /** A graph containing distribution of message views per hour */
  public dayGraph: StatisticsGraphUnion

  /** A graph containing distribution of message views per day of week */
  public weekGraph: StatisticsGraphUnion

  /** List of users sent most messages in the last week */
  public topSenders: ChatStatisticsMessageSenderInfo[]

  /** List of most active administrators in the last week */
  public topAdministrators: ChatStatisticsAdministratorActionsInfo[]

  /** List of most active inviters of new members in the last week */
  public topInviters: ChatStatisticsInviterInfo[]
}
