
export interface InputPhoneContact {
  _: 'inputPhoneContact'
  client_id: string
  phone: string
  first_name: string
  last_name: string
}

export type InputContactUnion = InputPhoneContact
