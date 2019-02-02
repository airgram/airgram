import { ChannelAdminLogEventActionUnion } from './ChannelAdminLogEventAction'

export interface ChannelAdminLogEvent {
  _: 'channelAdminLogEvent'
  id: string
  date: number
  user_id: number
  action: ChannelAdminLogEventActionUnion
}

export type ChannelAdminLogEventUnion = ChannelAdminLogEvent
