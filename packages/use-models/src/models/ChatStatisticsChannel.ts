import {
  ChatStatisticsMessageInteractionInfo,
  DateRange,
  StatisticalGraphUnion,
  StatisticalValue
} from '@airgram/core'

/** A detailed statistics about a channel chat */
export class ChatStatisticsChannelBaseModel {
  public _: 'chatStatisticsChannel'

  /** A period to which the statistics applies */
  public period: DateRange

  /** Number of members in the chat */
  public memberCount: StatisticalValue

  /** Mean number of times the recently sent messages was viewed */
  public meanViewCount: StatisticalValue

  /** Mean number of times the recently sent messages was shared */
  public meanShareCount: StatisticalValue

  /** A percentage of users with enabled notifications for the chat */
  public enabledNotificationsPercentage: number

  /** A graph containing number of members in the chat */
  public memberCountGraph: StatisticalGraphUnion

  /** A graph containing number of members joined and left the chat */
  public joinGraph: StatisticalGraphUnion

  /** A graph containing number of members muted and unmuted the chat */
  public muteGraph: StatisticalGraphUnion

  /** A graph containing number of message views in a given hour in the last two weeks */
  public viewCountByHourGraph: StatisticalGraphUnion

  /** A graph containing number of message views per source */
  public viewCountBySourceGraph: StatisticalGraphUnion

  /** A graph containing number of new member joins per source */
  public joinBySourceGraph: StatisticalGraphUnion

  /** A graph containing number of users viewed chat messages per language */
  public languageGraph: StatisticalGraphUnion

  /** A graph containing number of chat message views and shares */
  public messageInteractionGraph: StatisticalGraphUnion

  /** A graph containing number of views of associated with the chat instant views */
  public instantViewInteractionGraph: StatisticalGraphUnion

  /** Detailed statistics about number of views and shares of recently sent messages */
  public recentMessageInteractions: ChatStatisticsMessageInteractionInfo[]
}
