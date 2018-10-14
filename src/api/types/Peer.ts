
export interface PeerChannel {
  _: 'peerChannel'
  channel_id: number
}

export interface PeerChat {
  _: 'peerChat'
  chat_id: number
}

export interface PeerUser {
  _: 'peerUser'
  user_id: number
}

export type PeerUnion = PeerChannel
  | PeerChat
  | PeerUser
