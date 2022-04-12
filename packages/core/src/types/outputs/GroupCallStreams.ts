import { GroupCallStream } from './index'

export type GroupCallStreamsUnion = GroupCallStreams

/** Represents a list of group call streams */
export interface GroupCallStreams {
  _: 'groupCallStreams'
  /** A list of group call streams */
  streams: GroupCallStream[]
}
