import { BotInlineResultUnion } from './BotInlineResult'
import { InlineBotSwitchPmUnion } from './InlineBotSwitchPm'

export interface MessagesBotResults {
  _: 'messages.botResults'
  flags: number
  gallery?: true
  query_id: string
  next_offset?: string
  switch_pm?: InlineBotSwitchPmUnion
  results: BotInlineResultUnion[]
  cache_time: number
}

export type MessagesBotResultsUnion = MessagesBotResults
