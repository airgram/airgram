
export interface InputPhoneContact {
  _: 'inputPhoneContact'
  client_id: number
  phone: string
  first_name: string
  last_name: string
}

export type InputContactUnion = InputPhoneContact
