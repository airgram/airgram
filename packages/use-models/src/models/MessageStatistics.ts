import { StatisticalGraphUnion } from '@airgram/core'

/** A detailed statistics about a message */
export class MessageStatisticsBaseModel {
  public _: 'messageStatistics'

  /** A graph containing number of message views and shares */
  public messageInteractionGraph: StatisticalGraphUnion
}
