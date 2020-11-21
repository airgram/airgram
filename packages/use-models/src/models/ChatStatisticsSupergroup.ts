import {
  ChatStatisticsAdministratorActionsInfo,
  ChatStatisticsInviterInfo,
  ChatStatisticsMessageSenderInfo,
  DateRange,
  StatisticalGraphUnion,
  StatisticalValue
} from '@airgram/core'

/** A detailed statistics about a supergroup chat */
export class ChatStatisticsSupergroupBaseModel {
  public _: 'chatStatisticsSupergroup'

  /** A period to which the statistics applies */
  public period: DateRange

  /** Number of members in the chat */
  public memberCount: StatisticalValue

  /** Number of messages sent to the chat */
  public messageCount: StatisticalValue

  /** Number of users who viewed messages in the chat */
  public viewerCount: StatisticalValue

  /** Number of users who sent messages to the chat */
  public senderCount: StatisticalValue

  /** A graph containing number of members in the chat */
  public memberCountGraph: StatisticalGraphUnion

  /** A graph containing number of members joined and left the chat */
  public joinGraph: StatisticalGraphUnion

  /** A graph containing number of new member joins per source */
  public joinBySourceGraph: StatisticalGraphUnion

  /** A graph containing distribution of active users per language */
  public languageGraph: StatisticalGraphUnion

  /** A graph containing distribution of sent messages by content type */
  public messageContentGraph: StatisticalGraphUnion

  /** A graph containing number of different actions in the chat */
  public actionGraph: StatisticalGraphUnion

  /** A graph containing distribution of message views per hour */
  public dayGraph: StatisticalGraphUnion

  /** A graph containing distribution of message views per day of week */
  public weekGraph: StatisticalGraphUnion

  /** List of users sent most messages in the last week */
  public topSenders: ChatStatisticsMessageSenderInfo[]

  /** List of most active administrators in the last week */
  public topAdministrators: ChatStatisticsAdministratorActionsInfo[]

  /** List of most active inviters of new members in the last week */
  public topInviters: ChatStatisticsInviterInfo[]
}
