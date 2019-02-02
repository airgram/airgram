
export interface InputAppEvent {
  _: 'inputAppEvent'
  time: number
  type: string
  peer: string
  data: string
}

export type InputAppEventUnion = InputAppEvent
