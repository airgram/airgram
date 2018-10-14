import { MessageRangeUnion } from './MessageRange'

export interface ChannelMessagesFilter {
  _: 'channelMessagesFilter'
  flags: number
  exclude_new_messages?: true
  ranges: MessageRangeUnion[]
}

export interface ChannelMessagesFilterEmpty {
  _: 'channelMessagesFilterEmpty'
}

export type ChannelMessagesFilterUnion = ChannelMessagesFilter
  | ChannelMessagesFilterEmpty
