
export interface Error {
  _: 'error'
  code: number
  text: string
}

export type ErrorUnion = Error
