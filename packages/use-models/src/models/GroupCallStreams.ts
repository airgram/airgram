import { GroupCallStream } from '@airgram/core'

/** Represents a list of group call streams */
export class GroupCallStreamsBaseModel {
  public _: 'groupCallStreams'

  /** A list of group call streams */
  public streams: GroupCallStream[]
}
