
export interface InputChannel {
  _: 'inputChannel'
  channel_id: number
  access_hash: string
}

export interface InputChannelEmpty {
  _: 'inputChannelEmpty'
}

export type InputChannelUnion = InputChannel
  | InputChannelEmpty
