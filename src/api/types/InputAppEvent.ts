
export interface InputAppEvent {
  _: 'inputAppEvent'
  time: number
  type: string
  peer: number
  data: string
}

export type InputAppEventUnion = InputAppEvent
