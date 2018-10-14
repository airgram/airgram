
export interface MessageFwdHeader {
  _: 'messageFwdHeader'
  flags: number
  from_id?: number
  date: number
  channel_id?: number
  channel_post?: number
  post_author?: string
}

export type MessageFwdHeaderUnion = MessageFwdHeader
