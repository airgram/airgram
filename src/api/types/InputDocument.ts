
export interface InputDocument {
  _: 'inputDocument'
  id: number
  access_hash: number
}

export interface InputDocumentEmpty {
  _: 'inputDocumentEmpty'
}

export type InputDocumentUnion = InputDocument
  | InputDocumentEmpty
