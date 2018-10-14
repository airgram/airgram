
export interface MessagesBotCallbackAnswer {
  _: 'messages.botCallbackAnswer'
  flags: number
  alert?: true
  has_url?: true
  message?: string
  url?: string
  cache_time: number
}

export type MessagesBotCallbackAnswerUnion = MessagesBotCallbackAnswer
