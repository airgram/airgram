
export interface ChannelAdminLogEventsFilter {
  _: 'channelAdminLogEventsFilter'
  flags: number
  join?: true
  leave?: true
  invite?: true
  ban?: true
  unban?: true
  kick?: true
  unkick?: true
  promote?: true
  demote?: true
  info?: true
  settings?: true
  pinned?: true
  edit?: true
  delete?: true
}

export type ChannelAdminLogEventsFilterUnion = ChannelAdminLogEventsFilter
